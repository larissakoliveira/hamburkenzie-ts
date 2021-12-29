import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburkenzie.herokuapp.com/",
});

export default api;