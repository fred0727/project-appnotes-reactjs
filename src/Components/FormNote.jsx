import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createNote,
  setFindNoteUser,
  updateNote,
} from "../store/slices/notesUser.slice";
import { IoMdAlert } from "react-icons/io";

const DEFAULT_VALUES = {
  title: "",
  content: "",
};

const FormNote = ({ showModal }) => {
  const { user } = useSelector((store) => store.userInfo);
  const { note } = useSelector((store) => store.notesUser);
  const username = user.name.split(" ")[0];
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    data.content = data.content.replace(/\n/g, " \n");
    if (note == "") {
      dispatch(createNote(data));
      reset(DEFAULT_VALUES);
    } else {
      dispatch(updateNote(note.id, data));
      showModal();
      dispatch(setFindNoteUser(""));
    }
  };

  useEffect(() => {
    if (note == "") {
      reset(DEFAULT_VALUES);
    } else {
      reset({
        title: note.title,
        content: note.content,
      });
    }
  }, [note]);

  return (
    <div className="p-4 py-6 pt-2 w-full">
      <h1 className="font-['Pacifico'] text-lg">
        Hola {username},{note == "" ? " agrega " : " edita "}
        una nota.
      </h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-3 pt-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Ingresa el titulo"
          className="rounded-md border border-gray-300 px-3 py-1 text-gray-600 outline-none font-medium"
          {...register("title", {
            required: "Ingrese un titulo",
          })}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Contenido de tu nota..."
          className="rounded-md border border-gray-300 px-3 py-1 text-gray-600 outline-none font-medium"
          rows={4}
          {...register("content", {
            required: "Ingrese contenido de la nota",
          })}
        />
        <button className="bg-yellow-300 rounded-md py-2 font-['Pacifico'] shadow-md outline-none">
          {note == "" ? "Agregar Nota" : "Guardar Cambios"}
        </button>
      </form>
      <div className="text-red-500 font-medium pt-4" id="messageForm">
        {errors.title && (
          <p className="flex items-center gap-1">
            <IoMdAlert />
            {errors.title.message}
          </p>
        )}
        {errors.content && (
          <p className="flex items-center gap-1">
            <IoMdAlert />
            {errors.content.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormNote;
