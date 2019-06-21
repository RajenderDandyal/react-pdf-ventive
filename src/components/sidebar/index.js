import React from "react";
import Text from "../../UI/text/Text";
import FilesList from "../filesList/filesList";
import "./sidebar.scss"

const sidebar = (props) => {

  return (<div>
    <img className={"logo"} src={"/images/logo_sm_white.png"}/>
    <Text addStyle={{textAlign: "left", color: "rgba(255, 255, 255, 0.27)"}}>{"Files".toUpperCase()}</Text>
    <FilesList selected={props.selected} filesList={props.filesList} onSelectDoc={(id) => props.onSelectDoc(id)}/>
    <div className={"upload-container"}>
      <div className={"upload-button"}>
        <label htmlFor="upload"><img src={"/images/upload.png"}/>Upload file</label>
        <input id="upload" type="file" name="pdf" onChange={(e) => props.uploadHandler(e.target.files)}/>
      </div>
    </div>
  </div>)
};

export default sidebar;
