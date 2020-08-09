import React from "react";

const Home = () => {
  return (
    <div className="main">
      <h1 className="heading animate__animated animate__slideInUp">
        <span>Placeholder</span>
        <span>Images</span>
      </h1>
      <img
        className="animate__animated animate__slideInUp"
        src={require("../assets/hero.png")}
        height="300px"
      />
    </div>
  );
};

export default Home;
