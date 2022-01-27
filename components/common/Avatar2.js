import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Avatar2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle100}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle100: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "rgba(116,127,158,1)"
  }
});

export default Avatar2;
