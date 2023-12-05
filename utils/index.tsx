import axios from "axios";

export  async function getCarsData() {
  let query = {
    params: {
      model: "corolla",
      limit: "10",
    },
    headers: {
      "X-RapidAPI-Key": "a930461ce5msh17fb202f91e21ccp1da96ejsna525244258dc",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
 

   return axios
    .get("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", query)
    .then((res) => {
      console.log(res.data);
     return res?.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
