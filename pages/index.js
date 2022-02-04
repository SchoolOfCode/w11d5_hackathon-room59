import React from "react";
import Heading from "../Components/Heading";
import Content from "../Components/Content";
import { loremIpsum } from "../lib/data";

const Home = () => {
  return (
    <div>
      <Heading heading={"Home"} />
      <Content paragraph={loremIpsum} />
    </div>
  );
};

export default Home;
