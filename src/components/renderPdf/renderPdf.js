import React from "react";
import {Document, Page} from "react-pdf/dist/entry.webpack";
import Text from "../../UI/text/Text";

const renderPdf = ({file = "document1.pdf", onLoadSuccess, pageNumber = 1, numPages}) => {

  return (<div style={{width: '85%'}}>

    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
    >
      <Page pageNumber={pageNumber}/>
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
  </div>)
};

export default renderPdf;
