import React, { useState } from "react";

export const CitaForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputDate, setinputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [inputReason, setInputReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputName);
    setInputName("");

    console.log(inputDate);
    setinputDate("");

    console.log(inputTime);
    setInputTime("");

    console.log(inputReason);
    setInputReason("");

  };

  return (
    <>
      
        <form className="flex flex-col gap-3  bg-gray-50 p-5 rounded shadow" action="">
          <h1 className="text-2xl font-semibold">formulario citas</h1>
          <label 
            className="font-medium" 
            htmlFor="nombrePaciente1">
            Nombre del Paciente</label>
          <input
            className="border border-gray-400 outline-none bg-gray-200 rounded py-1.5 text-sm px-2"
            placeholder="ingresa nombre..."
            type="text"
            name="nombrePaciente1"
            id="nombrePaciente1"
            value={inputName}
            onChange={({ target }) => setInputName(target.value)}
          />


          <label 
            className="font-medium" 
            htmlFor="FechaPaciente">
            Fecha de la cita</label>
          <input
            className="border border-gray-400 outline-none bg-gray-200 rounded py-1.5 text-sm px-2"
            type="date"
            name="FechaPaciente"
            id="FechaPaciente"
            value={inputDate}
            onChange={({ target }) => setinputDate(target.value)}
          />



          <label 
            className="font-medium" 
            htmlFor="horaPaciente">
            Hora de la cita</label>
          <input
            className="border border-gray-400 outline-none bg-gray-200 rounded py-1.5 text-sm px-2"
            type="time"
            name="horaPaciente"
            id="horaPaciente"
            value={inputTime}
            onChange={({ target }) => setInputTime(target.value)}
          />



          <label 
            className="font-medium" 
            htmlFor="motivoPaciente">
            Asunto / Motivo</label>
          <textarea
            className="border border-gray-400 outline-none bg-gray-200 rounded h-36 text-sm px-2"
            placeholder="escribe asunto..."
            type="text"
            name="motivoPaciente"
            id="motivoPaciente"
            value={inputReason}
            onChange={({ target }) => setInputReason(target.value)}
          />

          <button 
            className="bg-emerald-500 text-white font-semibold shadow-lg rounded-2xl py-1 hover:bg-emerald-600 active:bg-emerald-700"
            onClick={handleSubmit}>
            enviar</button>
        </form>
    
    </>
  );
};
