"use client";
import React from "react";

const RegisterPage: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Adicione a lógica de registro aqui
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
