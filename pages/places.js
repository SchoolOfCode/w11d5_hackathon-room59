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
      <Heading heading={"Places"} />
      <Content paragraph={loremIpsum} />
    </div>
  );
};

export default Places;
