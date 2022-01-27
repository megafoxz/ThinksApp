import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsPin from "./IconsPin";

function TexfieldsLocateChoose(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconsPin3Row}>
        <IconsPin style={styles.iconsPin3}></IconsPin>
        <Text style={styles.london1}>London</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  iconsPin3: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginTop: 2
  },
  london1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(116,127,158,1)",
    fontSize: 16,
    marginLeft: 12
  },
  iconsPin3Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 209
  }
});

export default TexfieldsLocateChoose;
