import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonsSecondary(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle16}>
        <Text style={styles.button2}>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle16: {
    height: 44,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(255,163,123,1)",
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,1)"
  },
  button2: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255,163,123,1)",
    fontSize: 16,
    marginTop: 11,
    marginLeft: 139
  }
});

export default ButtonsSecondary;
