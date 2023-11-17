import axios from "axios";

export const axiosNotes = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("userInfo"))?.token
    }`,
  },
});
