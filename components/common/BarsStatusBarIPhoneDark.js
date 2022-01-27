import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function BarsStatusBarIPhoneDark(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BarsStatusBarIPhoneDark;
