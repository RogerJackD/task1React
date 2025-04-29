import React, { useState } from "react";
export const CitaFormDoctor = () => {
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [motivo, setMotivo] = useState("");
  const [areaMedica, setAreaMedica] = useState("");
  const [doctor, setDoctor] = useState("");

  const areasMedicas = [
    "Traumatología",
    "Dermatología",
    "Cardiología",
    "Neurología",
  ];

  const doctoresPorArea = {
    Traumatología: ["Dr. Pérez", "Dra. Gómez"],
    Dermatología: ["Dra. Vargas", "Dr. López", "Dra. Castro"],
    Cardiología: ["Dr. Ruiz"],
    Neurología: ["Dra. Fernández", "Dr. Soto"],
  };

  // Obtener la lista de doctores según el área seleccionada
  const doctoresDisponibles = doctoresPorArea[areaMedica] || [];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos de la cita:", {
      nombrePaciente,
      fecha,
      hora,
      motivo,
      areaMedica,
      doctor,
    });
    setNombrePaciente('');
    setFecha('');
    setHora('');
    setMotivo('');
    setAreaMedica('');
  };

  return (
    <>
      <form className="flex flex-col gap-2  bg-gray-50 p-5 rounded shadow" action="" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium text-center">FORM DOCTOR</h1>
          <label
            className="font-medium" 
            htmlFor="nombrePaciente">
            Nombre del Paciente:
          </label>
          <input
            className=" bg-white outline-none shadow rounded shadow-gray-300 px-2.5 py-1.5 text-sm"
            type="text"
            id="nombrePaciente"
            placeholder="example"
            value={nombrePaciente}
            onChange={(e) => setNombrePaciente(e.target.value)}
          />

          <label
            className="font-medium" 
            htmlFor="fecha">
              Fecha Deseada:</label>
          <input
            className="bg-white outline-none shadow rounded shadow-gray-300 px-2.5 py-1.5 text-sm"
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <label
            className="font-medium" 
            htmlFor="hora">
              Hora Deseada:</label>
          <input
            className="bg-white outline-none shadow rounded shadow-gray-300 px-2.5 py-1.5 text-sm"
            type="time"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

          <div className="flex flex-wrap">
              <div className="flex flex-col gap-2 mx-2 my-1 ">
                <label
                className="font-medium" 
                htmlFor="areaMedica">
                  Area medica:</label>
                <select
                  id="areaMedica"
                  className="bg-gray-200 rounded px-2 py-2 shadow border border-gray-400 outline-none"
                  value={areaMedica}
                  onChange={({ target }) => {
                    setAreaMedica(target.value);
                    setDoctor("");
                  }}
                >
                  <option value="">Seleccionar Area medica</option>

                  {areasMedicas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>

              </div>
              


              <div className="flex flex-col gap-2 mx-2 my-1">
                  
              <label
                className="font-medium" 
                htmlFor="doctores">
                  Doctores disponibles</label>
              <select
                id="doctores"
                className="bg-gray-200 rounded px-2 py-2 shadow border border-gray-400 outline-none"
                value={doctor}
                onChange={({ target }) => {
                  setDoctor(target.value);
                }}
                disabled={!areaMedica}
              >
                <option value="">Seleccionar Doctor</option>
                {doctoresDisponibles.map((doctor) => (
                  <option key={doctor} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </select>

              </div>

              

          </div>

          <label
            className="font-medium" 
            htmlFor="motivo">
              Motivo de la Consulta:</label>
          <textarea
            className="bg-white outline-none shadow rounded shadow-gray-300 px-2.5 py-1.5 text-sm h-36"
            id="motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        <button
          className="rounded bg-gray-800 text-white py-1 my-4 font-semibold hover:bg-gray-900 active:bg-black"
          type="submit"
         >Solicitar Cita</button>
      </form>
    </>
  );
};
