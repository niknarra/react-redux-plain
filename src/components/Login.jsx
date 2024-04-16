import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(login({ name: "Nik", age: 20, email: "nnn" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Login;
