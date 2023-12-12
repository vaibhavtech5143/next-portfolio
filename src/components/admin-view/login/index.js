"use client";
import { useState } from "react";
import { Login } from "@/services";

const controls = [
  {
    name: "username",
    placeholder: "Enter Your UserName",
    type: "text",
    label: "Enter Your Username"
  },
  {
    name: "password",
    placeholder: "Enter Your password",
    type: "password",
    label: "Enter Your password"
  } 
];

export default function login() {
  const [LoginFormData, setLoginFormData] = useState({});

  const handleLogin = () => {
    Login(LoginFormData);
    console.log(LoginFormData);
  };

  return (
    <div className="h-auto flex flex-col justify-center items-center mt-10 border">
      <div className="bg-[#ffffff] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        {controls.map((controlItem) => (
          <div key={controlItem.name} className="text-gray-600 align-center h-100% mt-10">
            <h2 className="text-gray-900 flex text-lg mb-1 font-medium title-font">
              Fill The Data To Update It
            </h2>
            <label className="text-sm text-gray-600">{controlItem.label}</label>
            <input
              placeholder={controlItem.placeholder}
              type={controlItem.type}
              id={controlItem.name}
              name={controlItem.name}
              value={LoginFormData[controlItem.name]}
              onChange={(e) => {
                setLoginFormData({ ...LoginFormData, [controlItem.name]: e.target.value });
              }}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>
        ))}
      </div>
      <button onClick={handleLogin} className="border border-orange-600 font-bold text-[16px] p-4 mt-[10px] border hover:active:bg-grey-500 active:text-orange-400">
        Login
      </button>
    </div>
  );
}
