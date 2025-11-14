//componente padre

import { Input } from "./input";
import React, { useState } from "react";

export const Formulario = () => {
  const [valorUsuario, setValorUsuario] = useState("");
  const [valorEmail, setValorEmail] = useState("");
  const [valorPassword, setValorPassword] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");

  const [mensajeExito, setMensajeExito] = useState("");

  const handleUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (!valor.trim()) setErrorNombre("El nombre es obligatorio");
    else if (valor.length < 3)
      setErrorNombre("Debe tener al menos 3 caracteres");
    else setErrorNombre("");
    setValorUsuario(valor);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!valor.trim()) {
      setErrorEmail("El correo es obligatorio");
    } else if (!emailRegex.test(valor)) {
      setErrorEmail("Correo no válido");
    } else {
      setErrorEmail("");
    }

    setValorEmail(valor);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[A-Z]).+$/;

    const valor = e.target.value;
    if (!passwordRegex.test(valor))
      setErrorMensaje(
        "La contraseña no puede estar vacío y debe tener una mayuscula"
      );
    else if (valor.length < 6)
      setErrorMensaje("Debe tener al menos 6 caracteres");
    else setErrorMensaje("");
    setValorPassword(valor);
  };

  const formValido =
    !errorNombre &&
    !errorEmail &&
    !errorMensaje &&
    valorUsuario &&
    valorEmail &&
    valorPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Mostrar mensaje de exito
    setMensajeExito("¡Mensaje enviado correctamente!");

    // Resetear formulario
    setValorUsuario("");
    setValorEmail("");
    setValorPassword("");

    setErrorNombre("");
    setErrorEmail("");
    setErrorMensaje("");

    // Quitar mensaje verde después de unos segundos
    setTimeout(() => {
      setMensajeExito("");
    }, 3000);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md"
      >
        <Input
          nombre={valorUsuario}
          email={valorEmail}
          password={valorPassword}
          onNombreChange={handleUsuario}
          onEmailChange={handleEmail}
          onPasswordChange={handlePassword}
          errorNombre={errorNombre}
          errorEmail={errorEmail}
          errorMensaje={errorMensaje}
        />

        {mensajeExito && (
          <p className="mt-3 p-3 bg-green-100 text-green-700 text-center rounded-lg font-semibold">
            {mensajeExito}
          </p>
        )}

        <button
          type="submit"
          disabled={!formValido}
          className={`mt-4 w-full py-2 rounded-lg text-white font-semibold transition ${
            formValido
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Registrar
        </button>
      </form>
    </>
  );
};

export default Formulario;
