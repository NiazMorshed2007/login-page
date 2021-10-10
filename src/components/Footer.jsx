import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  const buttons = [
    { cl: "facebook", icon: <FaFacebookF /> },
    { cl: "linkedin", icon: <GrLinkedinOption /> },
    { cl: "google", icon: <FcGoogle /> },
  ];
  return (
    <div className="footer">
      {buttons.map((button) => (
        <button className={button.cl} key={button.cl}>
          {button.icon}
        </button>
      ))}
    </div>
  );
};

export default Footer;
