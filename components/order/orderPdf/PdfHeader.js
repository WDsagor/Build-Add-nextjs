import React from "react";
import { Link, Text, View, StyleSheet, Svg, Image } from "@react-pdf/renderer";

const Header = ({ orderNo, orderDate }) => {
  const styles = StyleSheet.create({
    page: { backgroundColor: "tomato" },
    header: {},
    section: {
      margin: 20,
      color: "green",
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "12px",
      borderBottom: "1px solid red",
      paddingBottom: "10px",
    },
    logo: {
      width: "200",
    },
  });
  return (
    <View style={styles.header}>
      <View style={styles.section}>
        <Image style={styles.logo} src="/images/logo.png" alt="" />
        <View>
          <Text> Order No : {orderNo}</Text>
          <Text> Order Date : {orderDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
