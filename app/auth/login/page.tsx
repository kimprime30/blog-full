"use client";

import React from "react";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const elements = event.currentTarget.elements as HTMLFormControlsCollection;
    const username = (elements.namedItem("username") as HTMLInputElement).value;
    const password = (elements.namedItem("password") as HTMLInputElement).value;

    await signIn("credentials", {
      username,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
