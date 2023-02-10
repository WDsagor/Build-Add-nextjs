import React from "react";
import { Link, Text, View, StyleSheet, Svg, Image } from "@react-pdf/renderer";

const PdfFooter = () => {
  const styles = StyleSheet.create({
    footer: {
      display: "flex",
      flexDirection: "column",
      left: 0,
      bottom: 0,
    },
    headerSection: {
      margin: 20,
      marginBottom: 2,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "10px",
      gap: 30,
      borderTop: "1px solid red",
      paddingTop: "10px",
    },
    title: {
      fontSize: "12",
      fontWeight: "semibold",
    },
    logo: {
      width: "200",
    },
    link: {
      textDecoration: "none",
    },
    fotBottom: {
      backgroundColor: "red",
      padding: 2,
      color: "white",
      textAlign: "center",
      fontSize: "12px",
    },
  });
  return (
    <View style={styles.footer}>
      <View style={styles.headerSection}>
        <View>
          <Text style={styles.title}>Office :</Text>
          <Text>
            73 College Road, Matuail, Jatrabari, Dhaka-1362, Bangladesh.
          </Text>
          <Text>
            Phone: +8801673040503{" "}
            <Link
              style={styles.link}
              src="mailto:buildingadmixturelimited@gmail.com">
              E-mail: buildingadmixturelimited@gmail.com
            </Link>
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Factory :</Text>
          <Text>Fatullah, Narayangonj Dhaka, Bangladesh.</Text>
          <Text>
            <Link style={styles.link} src="mailto:buildadltd@gmail.com">
              E-mail: buildadltd@gmail.com
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.fotBottom}>
        <Text>www.buildingadmixtureltd.com</Text>
      </View>
    </View>
  );
};

export default PdfFooter;
