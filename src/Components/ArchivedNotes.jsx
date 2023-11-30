import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { activeNote, destroyNote } from "../store/slices/notesUser.slice";
import { MdDeleteForever, MdUnarchive } from "react-icons/md";

const ArchivedNotes = ({ note }) => {
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
        dispatch(destroyNote(note.id, "archived"));
      }
    });
  };

  const activeMyNote = () => {
    dispatch(activeNote(note.id));
  };
  return (
    <div className="p-4">
      <div className="bg-orange-400 rounded-b-md rounded-e-md p-4 shadow-lg flex flex-col gap-3 h-full">
        <h2 className="font-['Pacifico'] md:text-2xl">{note.title}</h2>
        <p className="text-sm font-medium whitespace-break-spaces">
          {note.content}
        </p>
        <div className="flex justify-end gap-1">
          <button onClick={activeMyNote}>
            <MdUnarchive className="text-2xl cursor-pointer" />
          </button>
          <button onClick={deleteNote}>
            <MdDeleteForever className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArchivedNotes;
