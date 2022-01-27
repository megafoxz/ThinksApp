import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsBottom from "./IconsBottom";

function TextfieldsDefaulPlacehoderIconsRight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle30}>
        <Text style={styles.chikanso2}>Chikanso</Text>
        <View style={styles.chikanso2Filler}></View>
        <IconsBottom style={styles.iconsBottom}></IconsBottom>
      </View>
      <Text style={styles.firstNameLastNa2}>First name &amp; Last name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle30: {
    height: 44,
    width: 327,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: 30
  },
  chikanso2: {
    height: 24,
    width: 257,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginLeft: 16,
    marginTop: 10
  },
  chikanso2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  iconsBottom: {
    height: 18,
    width: 18,
    backgroundColor: "transparent",
    marginRight: 16,
    marginTop: 13
  },
  firstNameLastNa2: {
    height: 22,
    width: 327,
    backgroundColor: "transparent",
    lineHeight: 22,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: -74
  }
});

export default TextfieldsDefaulPlacehoderIconsRight;
