import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo.slice";
import notesUser from "./slices/notesUser.slice";

export default configureStore({
  reducer: {
    userInfo,
    notesUser,
  },
});
