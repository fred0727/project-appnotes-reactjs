import React, { useEffect } from "react";
import Header from "../Components/Header";
import Notes from "../Components/Notes";
import FormNote from "../Components/FormNote";
import Modal from "../Components/Modal";
import { getAllNotes } from "../store/slices/notesUser.slice";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Home = () => {
  const { notes } = useSelector((store) => store.notesUser);
  const { token, user } = useSelector((store) => store.userInfo);
  const [isShowModal, setIsShowModal] = useState(false);

  const username = user.name.split(" ")[0];
  const showModal = (e) => {
    setIsShowModal(!isShowModal);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getAllNotes());
    }
  }, []);

  return (
    <>
      <Header />
      {notes.length > 0 ? (
        <div className="">
          <h3 className="font-['Pacifico'] text-lg px-6 pt-6">
            Hola {username}, mira tus notas.
          </h3>
          <div className="mt-2 px-2 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {notes.map((note) => (
              <Notes note={note} key={note.id} showModal={showModal} />
            ))}
          </div>
          <a
            onClick={() => showModal()}
            className="fixed bottom-6 animate-bounce right-6 cursor-pointer shadow-2xl rounded-full bg-red-500 h-12 w-12 flex justify-center items-center text-white text-xl"
          >
            <AiOutlinePlus />
          </a>
        </div>
      ) : (
        <div className="pt-6">
          <FormNote />
        </div>
      )}
      <div
        className={`${
          isShowModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }  fixed top-0 min-w-full min-h-screen z-100 bg-black/70 flex justify-center items-center transition-all duration-500`}
      >
        <Modal showModal={showModal} />
      </div>
    </>
  );
};

export default Home;
