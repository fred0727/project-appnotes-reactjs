import axios from "axios";

export const axiosNotes = axios.create({
  baseURL: "https://apinotes-nodejs.onrender.com/api/v1/",
});

export const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("userInfo"))?.token
    }`,
  },
});
