import React from "react";
import "./backDrop.scss";

const BackDrop = (props) => {
  return props.show ?
    <div style={{height: document.body.scrollHeight}} className={"backDrop"} onClick={props.backDrop}></div> : null;
};

export default BackDrop;
