import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsPin from "./IconsPin";
import IconsCheck from "./IconsCheck";

function TexfieldsLocate(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconsPin2Row}>
        <IconsPin style={styles.iconsPin2}></IconsPin>
        <Text style={styles.london}>London</Text>
        <IconsCheck style={styles.iconsCheck1}></IconsCheck>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  iconsPin2: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginTop: 2
  },
  london: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginLeft: 12
  },
  iconsCheck1: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginLeft: 189,
    marginTop: 1
  },
  iconsPin2Row: {
    height: 24,
    flexDirection: "row",
    flex: 1
  }
});

export default TexfieldsLocate;
