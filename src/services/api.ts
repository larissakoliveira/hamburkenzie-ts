import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburkenzie-db.onrender.com",
});

export default api;