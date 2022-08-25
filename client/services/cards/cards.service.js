import { mocks } from "./mock/index";

export const cardsRequestCurrentCity = (location = "47.6062, -122.3321") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    const loc = location;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

cardsRequestCurrentCity()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("err");
  });
