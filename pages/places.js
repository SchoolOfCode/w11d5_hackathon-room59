/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Heading from "../Components/Heading";
import Content from "../Components/Content";
import { loremIpsum } from "../lib/data";
import Image from "next/image";

const Places = () => {
  return (
    <div>
      <Image
        src="/../public/photo-1524942434100-2b3f200f5b40.jpeg"
        alt="picture of Palermo Cathedral"
        width={200}
        height={350}
      />
      <Image
        src="/../public/photo-1561280618-d4a6f7d04e79.jpeg"
        alt="picture of Celafu"
        width={350}
        height={250}
      />
      <img src="https://images.unsplash.com/photo-1550593729-4925b1e5bbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
      <Heading heading={"Places"} />
      <Content paragraph={loremIpsum} />
    </div>
  );
};

export default Places;
