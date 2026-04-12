import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader";
import PdfFooter from "./PdfFooter";
import TableItem from "./TableItem";

const PdfDoc = () => {
  const styles = StyleSheet.create({
    item: {
      textAlign: "left",
    },
  });
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <PdfHeader orderDate={"12/12/2022"} orderNo={"12222"} />
        <View style={styles.item}>
          <TableItem></TableItem>
        </View>
        <PdfFooter />
      </Page>
    </Document>
  );
};

export default PdfDoc;
