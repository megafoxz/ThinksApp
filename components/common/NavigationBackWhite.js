import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsBack from "./IconsBack";

function NavigationBackWhite(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconsBack2Stack}>
        <IconsBack style={styles.iconsBack2}></IconsBack>
        <Text style={styles.doctotList1}>Doctot List</Text>
        <IconsBack style={styles.iconsBack3}></IconsBack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconsBack2: {
    position: "absolute",
    top: 0,
    left: 24,
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  doctotList1: {
    position: "absolute",
    top: 6,
    left: 0,
    height: 29,
    width: 375,
    backgroundColor: "transparent",
    lineHeight: 29,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  iconsBack3: {
    position: "absolute",
    top: 0,
    left: 311,
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  iconsBack2Stack: {
    width: 375,
    height: 40
  }
});

export default NavigationBackWhite;
