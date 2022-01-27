import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import IconsCheck from "./IconsCheck";

function IconsUncheckBoxCopy(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle60Stack}>
        <View style={styles.rectangle60}></View>
        <View style={styles.rectangle61}>
          <IconsCheck style={styles.iconsCheck}></IconsCheck>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle60: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22,
    borderRadius: 6,
    backgroundColor: "rgba(255,163,123,1)"
  },
  rectangle61: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  iconsCheck: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    marginTop: 5,
    marginLeft: 5
  },
  rectangle60Stack: {
    width: 24,
    height: 24
  }
});

export default IconsUncheckBoxCopy;
