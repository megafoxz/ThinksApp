import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsBack from "./IconsBack";

function Card7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle84Stack}>
        <View style={styles.rectangle84}>
          <Text style={styles.orthopodist}>Orthopodist</Text>
        </View>
        <IconsBack style={styles.iconsBack6}></IconsBack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle84: {
    position: "absolute",
    top: 16,
    left: 0,
    height: 46,
    right: 0,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  orthopodist: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: 13,
    marginLeft: 65,
    marginRight: 12
  },
  iconsBack6: {
    position: "absolute",
    top: 0,
    left: 16,
    height: 40,
    width: 40,
    backgroundColor: "transparent"
  },
  rectangle84Stack: {
    height: 62
  }
});

export default Card7;
