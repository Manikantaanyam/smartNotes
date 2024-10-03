import React, { useEffect, useState } from "react";
import Input from "./Input";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { getItem, setInSession } from "./Session";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ type }) => {
  const [route, setRoute] = useState(type);
  const navigate = useNavigate();
  const toggle = () => {
    setRoute((p) => (p == "signup" ? "login" : "signup"));
    navigate("/" + route);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:3000/api/auth/${type}`,
        {
          username,
          email,
          password,
        }
      );

      setInSession("token", JSON.stringify(response.data));
      console.log(response.data);
      toast.success("Done");
      if (response.data.token) {
        navigate("/dashboard/");
      }
    } catch (e) {
      const errorMsg = e.response.data.msg;

      if (Array.isArray(errorMsg)) {
        return toast.error(e.response.data.msg[0]);
      }
      if (typeof errorMsg == "string") {
        return toast.error(e.response.data.msg);
      }

      console.log(e.response.data.msg[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] ">
      <div className="bg-white max-w-[300px] h-auto md:max-w-[400px] p-8 rounded-lg shadow-lg border w-full ">
        <form action="" onSubmit={handleAuth}>
          <h1 className="text-2xl text-center font-bold">{type}</h1>
          {type == "signup" ? (
            <Input
              type={"text"}
              placeholder={"Enter your name"}
              name={"username"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          ) : null}

          <Input
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type={"password"}
            placeholder={"Enter the password"}
            name={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            className="flex  items-center justify-center w-full font-semibold bg-black text-white mt-5 p-2 rounded-md cursor-pointer"
          >
            {type}
          </button>
          <p className="text-center text-gray-500 pt-2">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <span className="cursor-pointer text-blue-400" onClick={toggle}>
              {type == "signup" ? "login" : "signup"}
            </span>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Form;
