import React from "react";
import logo from "../assets/logo.png";

const Head = (props) => {
  return (
    <header className={!props.left ? "right-header" : ""}>
      {props.left ? (
        <>
          <img src={logo} alt="" />
          <h5>Brickshare</h5>
        </>
      ) : (
        <>
          <p>Don't have an account?</p>
          <button>Create Profile</button>
        </>
      )}
    </header>
  );
};

export default Head;
