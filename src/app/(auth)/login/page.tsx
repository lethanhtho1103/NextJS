import React from "react";
import LoginForm from "./login-form";

export default function Login() {
  return (
    <>
      <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </>
  );
}
