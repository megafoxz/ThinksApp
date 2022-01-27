import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonsPrimaryDisabled(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle15}>
        <Text style={styles.button1}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle15: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(176,179,199,1)",
  },
  button1: {
    height: 24,
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 10,
  },
});

export default ButtonsPrimaryDisabled;
