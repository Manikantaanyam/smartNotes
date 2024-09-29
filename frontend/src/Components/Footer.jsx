import React from "react";

const Footer = () => {
  return (
    <div className="border flex justify-between border-t-gray-200 p-5 ">
      <div>
        <p className="text-center text-sm text-gray-600">
          © 2024 SmartNotes. All rights reserved.
        </p>
      </div>
      <div className="flex space-x-5  text-gray-600 text-sm mr-7">
        <p>Terms of Service</p>
        <p>privacy</p>
      </div>
    </div>
  );
};

export default Footer;
