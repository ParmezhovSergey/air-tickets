import axios from "axios";

const instance = axios.create({
  baseURL: "data.json",
});

export const ticketsApi = {
  getTickets() {
    return instance.get("");
  },
};