import { mocks } from "./mock/index";

export const cardsRequestCurrentCity = (location = "47.6062, -122.3321") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    const loc = location;

    if (!mock) {
      reject("not found");
    }
    resolve(mock.data);
  });
};

cardsRequestCurrentCity()
  .then((result) => {
    const mappedResults = result.map((card) => {
      return {
        ...card,
      };
    });
    return mappedResults;
  })
  .catch((err) => {
    console.log("err");
  });
