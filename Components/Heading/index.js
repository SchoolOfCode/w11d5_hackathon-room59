import React from "react";
import * as css from "../../styles/heading.module.css";

const Heading = ({ heading }) => {
  return <h1 className={css.heading}>{heading}</h1>;
};

export default Heading;
