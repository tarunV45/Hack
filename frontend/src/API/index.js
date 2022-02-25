import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPost = () => {
  return API.get("/posts"); // or in this way, return must be mentioned explicitly
};
