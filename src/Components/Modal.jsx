import React from "react";
import FormNote from "./FormNote";
import { setFindNoteUser } from "../store/slices/notesUser.slice";
import { useDispatch } from "react-redux";

const Modal = ({ showModal }) => {
  const dispatch = useDispatch();

  const handleShowModal = () => {
    showModal();
    dispatch(setFindNoteUser(""));
  };

  return (
    <div className="w-[300px] bg-white shadow-lg flex justify-center rounded-md px-2 flex-col">
      <button
        className="w-full text-right pr-4 pt-4 text-xl"
        onClick={handleShowModal}
      >
        x
      </button>
      <FormNote showModal={showModal} />
    </div>
  );
};

export default Modal;
