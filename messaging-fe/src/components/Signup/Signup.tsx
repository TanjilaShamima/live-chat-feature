'use client';
import { SignUpFormType } from "@/src/utils/appCommondataType";
import React, { useState } from "react";

const Signup = () => {
  const [signUpData, setSignUpData] = useState<SignUpFormType>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    picture: null
  });
  const [errors, setErrors] = useState<Partial<SignUpFormType>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "picture" && files) {
      setSignUpData((prev) => ({
        ...prev,
        picture: files[0],
      }));
    } else {
      setSignUpData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = (): boolean => {
    let tempErrors: Partial<SignUpFormType> = {};
    if (!signUpData.name) tempErrors.name = "Name is required";
    if (!signUpData.username) tempErrors.username = "Username is required";
    if (!signUpData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(signUpData.email)) tempErrors.email = "Email is invalid";
    if (!signUpData.password) tempErrors.password = "Password is required";
    if (signUpData.password !== signUpData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle sign-up logic here
      console.log("Sign Up Data: ", signUpData);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] h-auto p-8 bg-white shadow-md rounded-md my-5">
        <h1 className="text-center text-2xl font-semibold mb-6 text-black">Sign Up Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signUpData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signUpData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
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
              value={signUpData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Picture</label>
            <input
              type="file"
              name="picture"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {/* {errors.picture && (
              <p className="text-red-500 text-sm">{errors.picture}</p>
            )} */}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
