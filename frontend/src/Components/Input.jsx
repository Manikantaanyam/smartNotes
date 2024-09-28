import React from "react";

const Input = ({ type, placeholder, name, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <input
        className="border border-gray-600 p-2 rounded-md mt-2 mb-2"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
