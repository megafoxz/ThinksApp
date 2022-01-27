import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsUser from "./IconsUser";

function Row1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconsUserRow}>
        <IconsUser style={styles.iconsUser}></IconsUser>
        <Text style={styles.profile2}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  iconsUser: {
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  profile2: {
    height: 24,
    width: 291,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginLeft: 12
  },
  iconsUserRow: {
    height: 24,
    flexDirection: "row",
    flex: 1
  }
});

export default Row1;
