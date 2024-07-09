"use client";
import { LoginDataType } from "@/src/utils/appCommondataType";
import React, { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginDataType>({} as LoginDataType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev: LoginDataType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (): boolean => {
    let tempErrors: LoginDataType = { email: "", password: "" };
    if (!loginData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(loginData.email))
      tempErrors.email = "Email is invalid";
    if (!loginData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      console.log("Login Data: ", loginData);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] h-auto p-8 bg-white shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold mb-6 text-black">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            I have no account?{" "}
            <Link className="text-blue-500 hover:underline" href="/sign-up">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
