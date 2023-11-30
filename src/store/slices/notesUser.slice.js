import { createSlice } from "@reduxjs/toolkit";
import { axiosNotes, getConfig } from "../../utils/configAxios";
import {
  messageSuccessActiveNote,
  messageSuccessArchiveNote,
  messageSuccessCreateNote,
  messageSuccessDeleteNote,
  messageSuccessUpdateNote,
} from "../../utils/message";

const initialState = {
  notes: "",
  archived: "",
  note: "",
};

const notesUserSlice = createSlice({
  initialState,
  name: "notesUser",
  reducers: {
    setNoteUser: (state, action) => {
      const newNotes = action.payload;
      state.notes = newNotes;
    },

    setArchivedNoteUser: (state, action) => {
      const newNotes = action.payload;
      state.archived = newNotes;
    },

    setFindNoteUser: (state, action) => {
      const note = action.payload;
      state.note = note;
    },
  },
});

export const {
  setNoteUser,
  setFindNoteUser,
  setArchivedNoteUser,
} = notesUserSlice.actions;

export const getAllNotes = () => (dispatch) => {
  axiosNotes
    .get("/notes", getConfig())
    .then(({ data }) => dispatch(setNoteUser(data.notes)))
    .catch((err) => console.log(err));
};

export const getArchivedNotes = () => (dispatch) => {
  axiosNotes
    .get("/notes/archived", getConfig())
    .then(({ data }) => dispatch(setArchivedNoteUser(data.notes)))
    .catch((err) => console.log(err));
};

export const createNote = (data) => (dispatch) => {
  axiosNotes
    .post("/notes", data, getConfig())
    .then(() => {
      messageSuccessCreateNote();
      setTimeout(() => {
        dispatch(getAllNotes());
      }, 2000);
    })
    .catch((err) => console.log(err));
};

export const destroyNote = (id, section) => (dispatch) => {
  axiosNotes
    .delete(`/notes/${id}`, getConfig())
    .then(() => {
      messageSuccessDeleteNote();
      if (section === "notes") {
        dispatch(getAllNotes());
      } else {
        dispatch(getArchivedNotes());
      }
    })
    .catch((err) => console.log(err));
};

export const archiveNote = (id) => (dispatch) => {
  axiosNotes
    .patch(`/notes/status/${id}`, {}, getConfig())
    .then(() => {
      messageSuccessArchiveNote();
      dispatch(getAllNotes());
    })
    .catch((err) => console.log(err));
};

export const activeNote = (id) => (dispatch) => {
  axiosNotes
    .patch(`/notes/active/${id}`, {}, getConfig())
    .then(() => {
      messageSuccessActiveNote();
      dispatch(getArchivedNotes());
    })
    .catch((err) => console.log(err));
};

export const findNote = (id) => (dispatch) => {
  axiosNotes
    .get(`/notes/${id}`, getConfig())
    .then(({ data }) => dispatch(setFindNoteUser(data.note)))
    .catch((err) => console.log(err));
};

export const updateNote = (id, data) => (dispatch) => {
  axiosNotes
    .patch(`/notes/${id}`, data, getConfig())
    .then(() => {
      messageSuccessUpdateNote();
      dispatch(getAllNotes());
    })
    .catch((err) => console.log(err));
};

export default notesUserSlice.reducer;
