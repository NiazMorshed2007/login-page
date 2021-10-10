import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { VscKey } from "react-icons/vsc";

const Content = (props) => {
  const labelItem = [
    { text: "Email", icon: <HiOutlineMail /> },
    { text: "Password", icon: <VscKey /> },
  ];
  return (
    <div className={!props.left ? 'right-content' : 'left-content'}>
      {props.left ? (
        <>
          <h1>Get exclusive access</h1>
          <h1> to brickshare</h1>
          <p>
            We are in the process of developing our online platform, where we
            aim to make the concept as user-friendly as possible. We therefore
            send out access continuously, focusing on the good customer contact.
          </p>
        </>
      ) : (
        <>
          <form>
            {labelItem.map((item) => (
              <label key={item.text}>
                <input type="text" required />
                <span>{item.text}</span>
                <i>{item.icon}</i>
                <div className="line-wrapper">
                  <div className="line"></div>
                </div>
              </label>
            ))}
            <button>Login</button>
          </form>
          <p>Forgot password?</p>
        </>
      )}
    </div>
  );
};

export default Content;
