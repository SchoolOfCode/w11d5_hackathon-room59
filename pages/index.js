import React from "react";
import Heading from "../Components/Heading";
import Content from "../Components/Content";
import { data } from "../lib/data";
import * as css from "../styles/home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Heading heading={"Home"} />
      <div className={css.container}>
        <div>
          <Image
            className={css.image}
            src="/../public/palermo-cathedral.jfif"
            alt="picture of Palermo's Cathedral"
            width={250}
            height={333}
          />
        </div>
        <div>
          <Image
            src="/../public/sanvito.jfif"
            alt="picture of sanvito"
            width={500}
            height={360}
            className={css.image}
          />
        </div>
        <Content className={css.paragraph} paragraph={data.home.paragraph} />
      </div>
    </div>
  );
};

export default Home;
