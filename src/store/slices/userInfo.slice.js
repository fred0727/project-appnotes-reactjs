import { createSlice } from "@reduxjs/toolkit";
import { axiosNotes } from "../../utils/configAxios";
import {
  loadingCreate,
  loadingLogin,
  messageCredentialIncorrects,
  messageErrorDuplicateEmail,
  messageSuccessSignUp,
} from "../../utils/message";
import Swal from "sweetalert2";

const initialState = {
  token: "",
  user: null,
};

const userInfoSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("userInfo")) ?? initialState,
  name: "userInfo",
  reducers: {
    setUserInfo: (state, action) => {
      const responseLogin = action.payload;
      const newState = {
        ...state,
        ...responseLogin,
      };
      localStorage.setItem("userInfo", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export const loginUser = (dataForm) => (dispatch) => {
  loadingLogin();
  axiosNotes
    .post("/auth/signin", dataForm)
    .then(({ data }) => {
      dispatch(setUserInfo(data));
      Swal.close();
    })
    .catch((err) => {
      messageCredentialIncorrects(err.response.data["message"]);
      console.log(err);
    });
};

export const createUser = (dataForm) => (dispatch) => {
  loadingCreate();
  axiosNotes
    .post("/auth/signup", dataForm)
    .then(() => {
      messageSuccessSignUp();
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    })
    .catch((err) => {
      if (
        err.response.data.error["name"] === "SequelizeUniqueConstraintError"
      ) {
        messageErrorDuplicateEmail();
      } else {
        console.log(err);
      }
    });
};

export const Logout = () => (dispatch) => {
  dispatch(setUserInfo(initialState));
};

export default userInfoSlice.reducer;
