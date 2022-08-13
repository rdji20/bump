from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import pickle
import pandas as pd
import numpy as np
import string
import nltk
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
from gensim import corpora, models, similarities
from nltk.stem.porter import PorterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.lancaster import LancasterStemmer
from nltk.tokenize import TweetTokenizer
import os
import uvicorn
from scipy import spatial



def load_model():
  with open('saved_steps.pk1', 'rb') as file:
    data = pickle.load(file)
  return data

data_pic = load_model()

# Model to get recomended documents or places to go
# We have to define master graph and seattle database to call
# initiate this before >
def lda_query_docspace_vectorizer_pickle(query):
    tokenizer = TweetTokenizer()
    porter = PorterStemmer()
    words_to_skip = ["i", "canada", "seattle", "edmonton", "calgary", "vancouver", "toronto", "canadian", "edmonton", "alberta", "montreal", "sooner", '_', '...',"‘", '-', "'",'washington', "…", "’", "–", "like", "2022", "1", "10", "”", "“", "really", "new", "best", "favorite", "one", "amazing", "extraordinary", "super", "very", "inmaculate", "prettiest", "outstanding", "8", "5", "7", "10/10"]
    stop_words_model = set(stopwords.words('english') + list(string.punctuation) + list(words_to_skip))

    texts2_model = []
    raw_model = query.lower()
    tokens_model = tokenizer.tokenize(raw_model)
    cleaned_tokens_model = []
    for token in tokens_model:
        if (token not in stop_words_model):
            cleaned_tokens_model.append(token)
    stemmed_tokens_model = []
    for token in cleaned_tokens_model:
        stemmed_tokens_model.append(porter.stem(token))
    texts2_model.append(stemmed_tokens_model)
    
    dictionary = data_pic['dictionary']
    other_corpus_model = [dictionary.doc2bow(text) for text in texts2_model]
    unseen_doc_model = other_corpus_model[0]
    vector_model = data_pic['model'][unseen_doc_model]

    # Check all the documents ids that are similar in the master data base
    # We are going to do cosine similarity with every documentsimi
    query_model = other_corpus_model[0]
    sims_model = data_pic['index'].get_similarities(query_model)
    count_model = 0
    docs_ids_user_query_model = []
    for i in sims_model:
        if i > 0.60:
            docs_ids_user_query_model.append(count_model)
        count_model += 1

    # Retrieve all documents (from specific location) which match with the master cards documents 
    # Which were retrieved in last space
    # Before this step we need to have 
    user_rec_cards_model = set()
    for i in docs_ids_user_query_model:
        [user_rec_cards_model.add(card) for card in data_pic['master_db'][i]]
    
    # Creating database to sort the db by cosine sim
    list_of_recs = data_pic["sea_cards"].iloc[list(user_rec_cards_model)]
    
    # Create matrix for jaccard sim
    mat_vector_query = [0] * 15
    for tup in vector_model:
        mat_vector_query[tup[0]] = 1 if tup[1] > 0 else 0
    
    # Getting the matrix vector size 15 of all the seattle cards lda vectors with jaccard
    count = 0
    mat_vectors_sea = []
    for vec in data_pic["seattle_cards_vectors"]:
        if count in list_of_recs.index:
            mat_vector_sea = [0] * 15
            for tup in vec:
                mat_vector_sea[tup[0]] = 1 if tup[1] > 0 else 0
            mat_vectors_sea.append(mat_vector_sea)
        count += 1
    
    # Doing all the cosine sims between query and seattle cards
    results = []
    for matvect in mat_vectors_sea:
        result = 1 - spatial.distance.jaccard(mat_vector_query, matvect)
        results.append(result)
        
    # Adding the column to recommendations db
    list_of_recs["jac_sim_query"] = results
    
    final_recs = list_of_recs.sort_values(by=["jac_sim_query"], ascending=False)
    final_recs = final_recs.index
    return list(final_recs)

default_cards = [292, 224, 246, 269, 335, 427, 591, 546, 558, 324, 303, 291]

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000"
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Good morning mr.West"}

@app.get("/bumprecs_sea/{query}")
async def get_recommendations(query):
    cards_string = ""
    cards = lda_query_docspace_vectorizer_pickle(query)
    for num in cards:
        cards_string += str((data_pic["sea_cards"].iloc[num].card_id)) + " " 
    cards = cards_string.split(" ")
    cards = cards[:-1]
    print(len(cards))
    if len(cards) == 0 :
        default_dic = {"sea_cards_ids": default_cards}
        return default_dic
    else :
        cards = cards[0:20]
        cards = [int(i) for i in cards]
        print(query)
        response_dict = {"sea_cards_ids": cards}
        json_compatible_item_data = jsonable_encoder(response_dict)
        return JSONResponse(content=json_compatible_item_data)


