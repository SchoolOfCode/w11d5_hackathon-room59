import React from "react";
import Heading from "../Components/Heading";
import Content from "../Components/Content";
import { loremIpsum } from "../lib/data.js";

const Places = () => {
  return (
    <div>
      <Heading heading={"Places"} />
      <Content paragraph={loremIpsum} />
    </div>
  );
};

export default Places;