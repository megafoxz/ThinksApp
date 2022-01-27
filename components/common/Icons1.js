import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import IconsFacebook from "./IconsFacebook";

function Icons1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle89}>
        <IconsFacebook style={styles.iconsFacebook}></IconsFacebook>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle89: {
    height: 44,
    width: 44,
    borderRadius: 10,
    backgroundColor: "rgba(255,246,242,1)"
  },
  iconsFacebook: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginTop: 10,
    marginLeft: 10
  }
});

export default Icons1;
