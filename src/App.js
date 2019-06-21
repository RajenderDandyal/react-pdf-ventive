import React, {Component} from 'react';
import axios from "axios";

import './App.scss';

import Text from "./UI/text/Text";
import RenderPdf from "./components/renderPdf/renderPdf";
import Sidebar from "./components/sidebar"

import SideDrawer from "./components/sideDrawer";

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    file: "document1.pdf",
    selected: 0,
    filesList: [{id: 0, doc: "document1", disName: "Document 01"}, {
      id: 1,
      doc: "document2",
      disName: "Document 02"
    }, {id: 2, doc: "document3", disName: "Document 03"}]
  };
  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  };
  onSelectDoc = (id) => {
    let pdf = this.state.filesList.find(item => item.id === id);
    this.setState({file: `${pdf.doc}.pdf`, selected: id})
  };
  uploadHandler = (files) => {
    this.setState({uploading: true})
    let formData = new FormData();
    const config = {
      header: {"content-type": "multipart/form-data"}
    };

    formData.append("file", files[0]);

    axios
      .post("/api//uploadpdf", formData, config)
      .then(response => this.setState({uploading: false,}));

  };
  backDropHandler = () => {
    this.setState({show: false})

  };

  menuClickedHandler = () => {
    window.scrollTo(0, 0);

    if (this.state.show) {
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = "no";
      this.setState({show: false})
    } else {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = "no";
      this.setState({show: true})
    }

  };

  render() {
    console.log(this.state)
    const {pageNumber, numPages, file, filesList, selected} = this.state;
    return (
      <div className={"container"}>
        <SideDrawer menuClicked={this.menuClickedHandler}
                    show={this.state.show}
                    backDrop={this.backDropHandler}
                    selected={selected} filesList={filesList} onSelectDoc={(id) => this.onSelectDoc(id)}
                    uploadHandler={(file) => this.uploadHandler(file)}/>
        <div className={"container-left"}>

          <Sidebar selected={selected} filesList={filesList} onSelectDoc={(id) => this.onSelectDoc(id)}
                   uploadHandler={(file) => this.uploadHandler(file)}/>

        </div>

        <div className={"container-right"}>
          <button className={"menuOpen"} onClick={() => this.setState({show: true})}>open menu</button>
          <Text addStyle={{textAlign: "left"}} type={"heading"}><img
            src={"/images/docLarge.png"}/>{filesList[selected].disName}</Text>
          <RenderPdf file={file}
                     onLoadSuccess={this.onDocumentLoadSuccess}
                     pageNumber={pageNumber}
                     numPages={numPages}/>

          {/*<embed src="document2.pdf" type="application/pdf"   height="700px" width="500"/>*/}
        </div>
      </div>
    );
  }
}

export default App;

