import React from "react";

//include images into your bundle

import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";
import Nav from "./nav";

//create your first component
const Home = () => {
  return (
    <div>
      <div className="header">
        <Nav />
      </div>
      <div className="margin">
        <Jumbotron />
      </div>
      <div className="images">
        <div className="row gy-3">
          <Cards
            photo={"https://placehold.co/500x325"}
            title={"Card title"}
            link={"Find Out More!"}
          />
          <Cards
            photo={"https://placehold.co/500x325"}
            title={"Card title"}
            link={"Find Out More!"}
          />
          <Cards
            photo={"https://placehold.co/500x325"}
            title={"Card title"}
            link={"Find Out More!"}
          />
          <Cards
            photo={"https://placehold.co/500x325"}
            title={"Card title"}
            link={"Find Out More!"}
          />
        </div>
      </div>
      <div className="footer">
        <Footer year={2018} />
      </div>
    </div>
  );
};

export default Home;
