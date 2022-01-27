import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsBack from "./IconsBack";

function NavigationBackBlack(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconsBackStack}>
        <IconsBack style={styles.iconsBack}></IconsBack>
        <Text style={styles.doctotList}>Doctot List</Text>
        <IconsBack style={styles.iconsBack1}></IconsBack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconsBack: {
    position: "absolute",
    top: 0,
    left: 24,
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  doctotList: {
    position: "absolute",
    top: 6,
    left: 0,
    height: 29,
    width: 375,
    backgroundColor: "transparent",
    lineHeight: 29,
    textAlign: "center",
    color: "rgba(38,44,61,1)",
    fontSize: 20
  },
  iconsBack1: {
    position: "absolute",
    top: 0,
    left: 311,
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  iconsBackStack: {
    width: 375,
    height: 40
  }
});

export default NavigationBackBlack;
