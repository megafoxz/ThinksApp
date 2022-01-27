import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function SystemTabBarDisplayDown1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.fill1Filler}></View>
      <Svg viewBox="0 0 134 5" style={styles.fill1}>
        <Path
          strokeWidth={0}
          fill="rgba(52,52,52,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M2.50 0.00 L131.50 0.00 C131.50 0.00 134.00 0.00 134.00 2.50 C134.00 2.50 134.00 2.50 134.00 2.50 C134.00 2.50 134.00 5.00 131.50 5.00 C131.50 5.00 2.50 5.00 2.50 5.00 C2.50 5.00 0.00 5.00 0.00 2.50 C0.00 2.50 0.00 2.50 0.00 2.50 C0.00 2.50 0.00 0.00 2.50 0.00 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fill1Filler: {
    flex: 1
  },
  fill1: {
    height: 5,
    width: 134,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginBottom: 9,
    marginLeft: 121
  }
});

export default SystemTabBarDisplayDown1;
