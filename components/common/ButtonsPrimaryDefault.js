import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonsPrimaryDefault(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle14}>
        <Text adjustsFontSizeToFit style={styles.button}>
          Button
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle14: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(255,163,123,1)",
  },
  button: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 10,
  },
});

export default ButtonsPrimaryDefault;
