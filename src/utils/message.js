import Swal from "sweetalert2";

export const messageSuccessSignUp = () => {
  Swal.fire({
    title: "Exito!",
    text: "Cuenta creada exitosamente!",
    icon: "success",
    showConfirmButton: false,
  });
};

export const messageErrorDuplicateEmail = () => {
  Swal.fire({
    title: "Duplicado",
    text: "Email ya se encuentra registrado",
    icon: "warning",
    timer: 2000,
    confirmButtonColor: "#d33",
  });
};

export const messageSuccessCreateNote = () => {
  Swal.fire({
    title: "Exito!",
    text: "Nota creada correctamente",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const messageSuccessDeleteNote = () => {
  Swal.fire({
    title: "Exito!",
    text: "Nota eliminada correctamente",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const messageSuccessArchiveNote = () => {
  Swal.fire({
    title: "Exito!",
    text: "Nota archivada",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const messageSuccessActiveNote = () => {
  Swal.fire({
    title: "Exito!",
    text: "Nota activada",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const messageSuccessUpdateNote = () => {
  Swal.fire({
    title: "Exito!",
    text: "Nota editada correctamente",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
};

export const messageCredentialIncorrects = (message) => {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "warning",
    timer: 2000,
    showConfirmButton: true,
  });
};
