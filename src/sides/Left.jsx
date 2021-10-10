import React from "react";
import Content from "../components/Content";
import Head from "../components/Head";

const Left = () => {
  return (
    <div className="left">
      <Head left={true} />
      <Content left={true} />
      <div className="ellipse"></div>
    </div>
  );
};

export default Left;
