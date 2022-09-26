import React, { useState, createContext, useEffect, useMemo } from "react";

import { cardsRequestCurrentCity } from "./cards.service";

export const CardsContext = createContext();

export const CardsContextProvider = ({ children }) => {
  const [homeCards, setHomeCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveCards = () => {
    setIsLoading(true);
    setTimeout(() => {
      cardsRequestCurrentCity()
        .then((requestedCards) => {
          // console.log("These are the cards to check", requestedCards);
          setIsLoading(false);
          setHomeCards(requestedCards);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(error);
        });
    }, 2000);
  };

  useEffect(() => {
    retriveCards();
  }, []);

  return (
    <CardsContext.Provider
      value={{
        homeCards,
        isLoading,
        error,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
