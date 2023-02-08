import axios from "axios";

const contactApi = axios.create({
  baseURL: "https://pear-clever-goat.cyclic.app/",
});

export const postContactEmail = (fields) => {
  console.log(fields);
  return contactApi
    .post("/send", fields, { headers: {} })
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};
