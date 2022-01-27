import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function IconsUncheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle58Stack}>
        <View style={styles.rectangle58}></View>
        <View style={styles.rectangle59}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle58: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22,
    borderWidth: 1,
    borderColor: "rgba(179,182,201,1)",
    borderRadius: 6,
    backgroundColor: "transparent"
  },
  rectangle59: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  rectangle58Stack: {
    width: 24,
    height: 24
  }
});

export default IconsUncheckBox;
