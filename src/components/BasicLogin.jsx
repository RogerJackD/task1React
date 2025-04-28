import React, { useState } from "react";

export const BasicLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`data del input username ${username}`);
    console.log(`data del input Password ${password}`);
    setPassword('');
    setUsername('');
  };
    
  return (
    <>
      <form className="flex flex-col gap-2 bg-gray-50 m-4 p-5 rounded shadow">
        <h1 className="text-3xl font-medium">Tarea1 - credenciales</h1>
        <div className="flex flex-col gap-2">
          <label 
            htmlFor="username">
            Username:</label>
          <input
            className="border rounded px-2 py-1 outline-none text-sm "
            value={username}
            type="text"
            name="username"
            id="username"
            placeholder="escribe tu user..."
            onChange={({target}) => setUsername(target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label 
            htmlFor="username">
            Password:</label>
          <input
            className="border rounded px-2 py-1 outline-none text-sm"
            value={password}
            type="password"
            name="username"
            id="username"
            placeholder="*****"
            onChange={({target}) => setPassword(target.value)}
          />
        </div>

        <button 
            className="bg-blue-500 text-white rounded py-1 hover:bg-blue-600 shadow-[0_10px_10px] shadow-blue-500/20 font-semibold"
            onClick={handleSubmit}>
            enviar
        </button>
      </form>
    </>
  );
};
