import React from "react";

const Content = ({ paragraph, className }) => {
  return (
    <div className={className}>
      <p>{paragraph}</p>
    </div>
  );
};

export default Content;
