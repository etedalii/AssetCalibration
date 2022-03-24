import React from "react";
import MainHeader from "../MainHeader/MainHeader";

const Home = (props) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main className="container">
        <h1>Welcome back!</h1>
      </main>
    </React.Fragment>
  );
};

export default Home;
