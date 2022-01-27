import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TextfieldsDefaulFilled(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle29}>
        <Text style={styles.chikanso1}>Chikanso</Text>
      </View>
      <Text style={styles.firstNameLastNa1}>First name &amp; Last name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle29: {
    height: 44,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    marginTop: 30
  },
  chikanso1: {
    height: 24,
    width: 289,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 16
  },
  firstNameLastNa1: {
    height: 22,
    width: 327,
    backgroundColor: "transparent",
    lineHeight: 22,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: -74
  }
});

export default TextfieldsDefaulFilled;
