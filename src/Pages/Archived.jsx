import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import Notes from "../Components/Notes";
import { getArchivedNotes } from "../store/slices/notesUser.slice";
import ArchivedNotes from "../Components/ArchivedNotes";

const Archived = () => {
  const { notes } = useSelector((store) => store.notesUser);
  const { token, user } = useSelector((store) => store.userInfo);

  const username = user.name.split(" ")[0];

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getArchivedNotes());
    }
  }, []);

  return (
    <>
      <Header />
      {notes.length > 0 ? (
        <div className="">
          <h3 className="font-['Pacifico'] text-lg px-6 pt-6">
            Hola {username}, mira tus notas archivadas.
          </h3>
          <div className="mt-2 px-2 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {notes.map((note) => (
              <ArchivedNotes note={note} key={note.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="font-['Pacifico'] pt-6 text-center">
          No se encontraron notas archivadas!{" "}
        </div>
      )}
    </>
  );
};

export default Archived;
