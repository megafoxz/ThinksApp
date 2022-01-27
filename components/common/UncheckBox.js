import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function UncheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle72}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle72: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 10,
    backgroundColor: "transparent"
  }
});

export default UncheckBox;
