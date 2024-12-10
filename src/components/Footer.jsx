// src/components/Footer.jsx
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 bottom-0 flex fixed right-0 left-0 px-10">
      <div>
        <img
          className="h-10 w-10 "
          src=""
          alt="logo"
        />
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 React App. All rights reserved.</p>
        <p className="text-sm">Developed by kelvin</p>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
