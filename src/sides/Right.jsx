import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Right = () => {
  return (
    <div className="right">
      <Head left={false} />
      <Content left={false} />
      <Footer />
    </div>
  );
};

export default Right;
