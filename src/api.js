import axios from "axios";

const contactApi = axios.create({
  baseURL: "http://smiling-leggings-ray.cyclic.app",
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
