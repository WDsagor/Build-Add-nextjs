import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const TableItem = () => {
  const styles = StyleSheet.create({
    table: {
      height: "78%",
      marginLeft: 40,
      marginRight: 40,
      fontSize: "12px",
    },
    tableHead: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 5,
      paddingHorizontal: 5,
      backgroundColor: "green",
      color: "white",
    },
    tablebody: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderBottom: "1px solid #E6E6E6",
      color: "black",
      fontSize: "10px",
      gap: 20,
    },

    info: {
      paddingBottom: 10,
    },
    rowitem: {
      textAlign: "left",
      width: 180,
      paddingLeft: 10,
    },
  });
  const order = [
    {
      id: 1,
      name: "Adaption plus",
      size: 20,
      quantity: 10,
      unitprice: "200",
    },
    {
      id: 2,
      name: "Adaption plus",
      size: 10,
      quantity: 10,
      unitprice: "200",
    },
    {
      id: 3,
      name: "Rawmix",
      size: 20,
      quantity: 10,
      unitprice: "200",
    },
    {
      id: 4,
      name: "Rawmix",
      size: 20,
      quantity: 50,
      unitprice: "200",
    },
    {
      id: 5,
      name: "Rawmix",
      size: 4,
      quantity: 10,
      unitprice: "200",
    },
  ];
  return (
    <View style={styles.table}>
      <View style={styles.info}>
        <Text>To</Text>
        <Text>Comany Name</Text>
        <Text>Address</Text>
      </View>
      <View style={styles.tableHead}>
        <Text style={styles.rowitem}>Size</Text>
        <Text style={styles.rowitem}>Item Name</Text>
        <Text style={styles.rowitem}>Quantity</Text>
        <Text style={styles.rowitem}>Unit Price</Text>
        <Text style={styles.rowitem}>Total (TK)</Text>
      </View>
      {order.map((item, index) => {
        return (
          <View key={index} style={styles.tablebody}>
            <Text style={styles.rowitem}>{item.size} Litter</Text>
            <Text style={styles.rowitem}>{item.name}</Text>
            <Text style={styles.rowitem}>{item.quantity} Pcs</Text>
            <Text style={styles.rowitem}>{item.unitprice}.00</Text>
            <Text style={styles.rowitem}>
              {item.quantity * item.unitprice}.00
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default TableItem;
