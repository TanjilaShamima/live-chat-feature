"use client";
import { LoginDataType } from "@/src/utils/appCommondataType";
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({} as LoginDataType);
  const [errors, setErrors] = useState<LoginDataType>({} as LoginDataType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  setLoginData((prev: LoginDataType) => ({
    ...prev,
    [e.target.name]: e.target.value,
  
  }))

}
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] h-auto  bg-black text-black z-30">
        <h1 className="text-center">Login Form</h1>
        <form>
          <div>
            <p>Email</p>
            <input type="email" placeholder="Email" value={loginData?.email} />
            {errors.email && <p></p>}
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="Email"
              value={loginData?.password}
            />
            {errors.password && <p></p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
