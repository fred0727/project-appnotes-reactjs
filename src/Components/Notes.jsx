import React from "react";
import Swal from "sweetalert2";
import { IoMdArchive } from "react-icons/io";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  destroyNote,
  archiveNote,
  findNote,
  setFindNoteUser,
} from "../store/slices/notesUser.slice";

const Notes = ({ note, showModal }) => {
  const dispatch = useDispatch();

  const deleteNote = () => {
    Swal.fire({
      title: "Eliminar nota?",
      text: "Esta eliminación no sera revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(destroyNote(note.id, "notes"));
      }
    });
  };

  const handleClickModal = () => {
    showModal();
    dispatch(setFindNoteUser(note));
  };

  const archiveMyNote = () => {
    dispatch(archiveNote(note.id));
  };

  return (
    <div className="p-4">
      <div className="bg-yellow-300 rounded-b-md rounded-e-md p-4 shadow-lg flex flex-col gap-3 h-full">
        <h2 className="font-['Pacifico']">{note.title}</h2>
        <p className="text-sm font-medium whitespace-break-spaces">
          {note.content}
        </p>
        <div className="flex justify-end gap-1">
          <button onClick={handleClickModal}>
            <MdEditSquare className="text-xl cursor-pointer" />
          </button>
          <button onClick={archiveMyNote}>
            <IoMdArchive className="text-xl cursor-pointer" />
          </button>
          <button onClick={deleteNote}>
            <MdDeleteForever className="text-xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Notes;
