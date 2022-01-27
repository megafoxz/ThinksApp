import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsCheck(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.checkStack}>
        <View style={styles.check}>
          <Svg viewBox="0 0 22 16.54" style={styles.path108}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M21.68 0.19 C21.31 -0.11 20.77 -0.05 20.47 0.32 L9.04 14.55 C8.88 14.72 8.67 14.81 8.44 14.82 C8.21 14.83 7.99 14.75 7.82 14.59 L1.45 8.49 C1.11 8.16 0.57 8.17 0.24 8.51 C-0.09 8.86 -0.08 9.40 0.26 9.73 L6.63 15.83 C7.12 16.29 7.74 16.54 8.41 16.54 C8.44 16.54 8.48 16.54 8.51 16.54 C9.21 16.51 9.86 16.21 10.33 15.68 C10.34 15.67 10.35 15.66 10.36 15.65 L21.81 1.40 C22.11 1.03 22.05 0.49 21.68 0.19 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle76}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  check: {
    position: "absolute",
    top: 4,
    left: 1,
    height: 17,
    width: 22
  },
  path108: {
    height: 17,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle76: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  checkStack: {
    width: 24,
    height: 24
  }
});

export default IconsCheck;
