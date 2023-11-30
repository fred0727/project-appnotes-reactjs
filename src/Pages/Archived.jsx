import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getArchivedNotes } from "../store/slices/notesUser.slice";
import ArchivedNotes from "../Components/ArchivedNotes";
import { ThreeDots } from "react-loader-spinner";

const Archived = () => {
  const { archived } = useSelector((store) => store.notesUser);
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
      {!archived ? (
        <div className="fixed bg-white min-w-full min-h-screen flex justify-center items-center z-50 top-0">
          <ThreeDots
            height="120"
            width="120"
            radius="9"
            color="#ef4444"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : archived.length > 0 ? (
        <div className="">
          <h3 className="font-['Pacifico'] text-lg px-6 pt-6 sm:text-xl">
            Hola {username}, mira tus notas archivadas.
          </h3>
          <div className="mt-2 px-2 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {archived.map((note) => (
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
