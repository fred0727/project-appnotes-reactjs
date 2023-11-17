import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../store/slices/userInfo.slice";
import { IoMdAlert } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(createUser(data));
  };

  return (
    <div className="">
      <div className="min-h-screen flex flex-col">
        <div className="flex h-70 relative">
          <img src="./img/notes.jpg" alt="" className="w-full object-cover" />
          <svg
            className="absolute -bottom-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              d="M0,32L60,42.7C120,53,240,75,360,112C480,149,600,203,720,202.7C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="min-h-full flex-1 flex flex-col items-center py-20 xs:py-16">
          <h1 className="text-4xl font-['Pacifico'] text-slate-700 px-8 text-center xs:text-5xl">
            Registrate
          </h1>
          <form
            onSubmit={handleSubmit(submit)}
            className="mt-8 grid grid-cols-1 gap-4 min-w-full px-8 text-gray-700 xs:text-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombres y Apellidos"
              className="rounded-md border border-gray-300 p-2 px-3 text-gray-700 outline-none"
              {...register("name", {
                required: "Ingrese sus nombres y apellidos",
              })}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="rounded-md border border-gray-300 p-2 px-3 text-gray-700 outline-none"
              {...register("email", {
                required: "Ingrese su email",
                pattern: {
                  value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: "Ingrese un email valido",
                },
              })}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-md border border-gray-300 p-2 px-3 text-gray-700 outline-none"
              {...register("password", {
                required: "Ingrese su contraseña",
                minLength: {
                  value: 8,
                  message: "Contraseña minimo 8 caracteres",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-záéíóúüñ])/,
                  message: "(Password) minimo una letra",
                },
              })}
            />
            <button className="bg-blue-600 rounded-md text-white p-2 mt-3 xs:text-xl flex justify-center items-center">
              Registrarse
            </button>
            <div className="flex gap-1 text-gray-600 justify-center">
              ¿Ya tienes cuenta?
              <Link
                to={"/login"}
                className="text-center font-medium text-blue-500 underline-offset-1"
              >
                Inicia Sesión
              </Link>
            </div>
            <div className="text-red-500 font-medium" id="messageForm">
              {errors.name && (
                <p className="flex items-center gap-2">
                  <IoMdAlert />
                  {errors.name.message}
                </p>
              )}
              {errors.email && (
                <p className="flex items-center gap-2">
                  <IoMdAlert />
                  {errors.email.message}
                </p>
              )}
              {errors.password && (
                <p className="flex items-center gap-2">
                  <IoMdAlert />
                  {errors.password.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
