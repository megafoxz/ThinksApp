import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function CheckBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle73}>
        <Text style={styles.style30}>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle73: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 10,
    backgroundColor: "transparent"
  },
  style30: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255,163,123,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 17
  }
});

export default CheckBox;
