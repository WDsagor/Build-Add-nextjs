import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader";

const PdfDoc = () => {
  return (
    <Document>
      <Page size={"A4"}>
        <PdfHeader />
      </Page>
    </Document>
  );
};

export default PdfDoc;
