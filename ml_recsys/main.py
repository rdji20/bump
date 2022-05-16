from fastapi import FastAPI
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
    
    # I cannot just return this. It throws a non iterable error
    # sea_cards_nums = set()
    # for num in user_rec_cards_model:
    #     sea_cards_nums.add(data_pic["sea_cards"].iloc[num].card_id)
    
    # return sea_cards_nums
    
    return user_rec_cards_model



app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/bumprecs_sea/{query}")
async def get_recommendations(query):
    cards_string = ""
    cards = lda_query_docspace_vectorizer_pickle(query)
    for num in cards:
        cards_string += str((data_pic["sea_cards"].iloc[num].card_id)) + " " 
    cards = cards_string.split(" ")
    cards = cards[:-1]
    cards = [int(i) for i in cards]
    return {"sea_cards_ids": cards}


