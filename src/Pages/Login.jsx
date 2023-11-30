import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/slices/userInfo.slice";
import { IoMdAlert } from "react-icons/io";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="md:flex md:justify-center md:items-center min-h-screen md:bg-gray-200/50 md:p-10 lg:px-32">
      <div className="flex flex-col min-h-full md:flex-row md:shadow-xl md:w-[900px] md:h-[650px] lg:w-[100%] lg:h-[100%] rounded-md">
        <div className="flex relative xs:h-96 md:min-h-full lg:w-[70%] lg:h-[100%]">
          <img
            src="./img/notes.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <svg
            className="absolute -bottom-2 md:bottom-0 md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              d="M0,32L60,42.7C120,53,240,75,360,112C480,149,600,203,720,202.7C840,203,960,149,1080,144C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col min-h-full justify-center items-center py-20 xs:py-4 md:py-10 lg:px-4 md:bg-white md:justify-center lg:w-[30%] lg:h-auto">
          <h1 className="text-5xl font-['Pacifico'] text-slate-700 text-center xs:text-6xl">
            Bienvenid@!
            <br />
            <span className="text-2xl xs:text-3xl">Inicia tu sesión</span>
          </h1>
          <form
            onSubmit={handleSubmit(submit)}
            className="mt-6 grid grid-cols-1 gap-4 px-8 text-gray-700 w-full xs:w-[425px] md:w-[350px] lg:w-full xs:text-lg"
          >
            <input
              type="email"
              className="rounded-md border border-gray-200 p-2 px-3 outline-none"
              placeholder="Email"
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
              className="rounded-md border border-gray-200 p-2 px-3 outline-none"
              placeholder="Password"
              {...register("password", {
                required: "Ingrese su contraseña",
                minLength: {
                  value: 8,
                  message: "Contraseña minimo 8 caracteres",
                },
              })}
            />
            <button className="bg-blue-600 rounded-md text-white p-2 mt-3 xs:text-xl flex justify-center items-center">
              Login
            </button>
            <div className="flex justify-center gap-1 xs:text-lg">
              <span className="text-gray-600">¿No tienes cuenta?</span>
              <Link
                to="/signup"
                className="underline-offset-1 text-blue-400 font-semibold"
              >
                Registrate
              </Link>
            </div>
            <div className="text-red-500 font-medium" id="messageForm">
              {errors.email && (
                <p className="flex items-center gap-1">
                  <IoMdAlert />
                  {errors.email.message}
                </p>
              )}
              {errors.password && (
                <p className="flex items-center gap-1">
                  <IoMdAlert />
                  {errors.password.message}
                </p>
              )}
            </div>
          </form>
          <p className="text-gray-400 mt-5 text-sm md:text-base">
            © 2023 Freddy Muñoz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
