import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsCheck1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.check1Stack}>
        <View style={styles.check1}>
          <Svg viewBox="0 0 17.44 22" style={styles.path109}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M14.00 22.00 L3.44 22.00 L0.00 18.56 L0.00 3.44 L3.44 0.00 L14.00 0.00 L17.44 3.44 L17.44 14.27 C17.44 14.27 17.06 15.13 16.58 15.13 C16.11 15.13 15.72 14.27 15.72 14.27 L15.72 3.44 L14.00 1.72 L3.44 1.72 L1.72 3.44 L1.72 18.56 L3.44 20.28 L14.00 20.28 C14.00 20.28 15.72 19.51 15.72 18.56 C15.72 18.09 16.11 17.70 16.58 17.70 C17.06 17.70 17.44 18.09 17.44 18.56 C17.44 20.46 14.00 22.00 14.00 22.00 Z M8.03 15.07 C8.03 15.07 7.94 15.08 7.89 15.08 C7.32 15.08 6.36 14.47 6.36 14.47 L3.62 11.83 C3.62 11.83 3.26 10.96 3.59 10.62 C3.92 10.28 4.81 10.60 4.81 10.60 L7.55 13.23 C7.55 13.23 7.84 13.37 7.92 13.36 C8.00 13.35 8.26 13.19 8.26 13.19 L12.49 7.27 C12.49 7.27 13.31 6.80 13.69 7.08 C14.08 7.35 13.89 8.28 13.89 8.28 L9.64 14.22 C9.64 14.22 9.62 14.24 9.61 14.25 C9.22 14.73 8.03 15.07 8.03 15.07 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle79}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  check1: {
    position: "absolute",
    top: 1,
    left: 3,
    height: 22,
    width: 17
  },
  path109: {
    height: 22,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle79: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  check1Stack: {
    width: 24,
    height: 24
  }
});

export default IconsCheck1;
