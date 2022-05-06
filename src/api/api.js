import axios from "axios";

const API_URL = "https://626be2f5e5274e6664d304dc.mockapi.io/";
export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
