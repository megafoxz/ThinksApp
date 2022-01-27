import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import IconsBack1 from "./IconsBack1";

function IconsBack(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle}>
        <IconsBack1 style={styles.iconsBack1}></IconsBack1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle: {
    height: 32,
    width: 32,
    borderRadius: 10,
    backgroundColor: "rgba(255,246,242,1)"
  },
  iconsBack1: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 8,
    marginLeft: 8
  }
});

export default IconsBack;
