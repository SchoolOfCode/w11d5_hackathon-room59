import React from "react";
import Heading from "../Components/Heading";
import Content from "../Components/Content";
import { loremIpsum } from "../lib/data.js";

const About = () => {
  return (
    <div>
      <Heading heading={"About"} />
      <Content paragraph={loremIpsum} />
    </div>
  );
};

export default About;
