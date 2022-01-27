import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsAdd1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.addStack}>
        <View style={styles.add}>
          <View style={styles.path43Stack}>
            <Svg viewBox="0 0 16.84 22" style={styles.path43}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M16.20 12.18 C16.00 12.61 15.48 12.80 15.06 12.59 C13.85 12.02 12.57 11.71 11.23 11.68 C11.15 11.69 11.08 11.69 11.00 11.69 C10.92 11.69 10.85 11.69 10.77 11.68 C6.41 11.79 2.63 14.92 1.74 19.20 C1.68 19.47 1.75 19.74 1.92 19.95 C2.02 20.08 2.61 20.28 2.61 20.28 L13.19 20.28 C13.19 20.28 14.05 20.67 14.05 21.14 C14.05 21.62 13.19 22.00 13.19 22.00 L2.61 22.00 C2.61 22.00 1.08 21.65 0.59 21.04 C0.09 20.42 -0.11 19.63 0.06 18.85 C0.57 16.37 1.94 14.12 3.90 12.50 C4.97 11.62 6.20 10.95 7.50 10.52 C6.08 9.46 5.16 7.76 5.16 5.84 C5.16 2.62 7.78 0.00 11.00 0.00 C14.22 0.00 16.84 2.62 16.84 5.84 C16.84 7.75 15.92 9.45 14.50 10.52 C14.94 10.66 15.37 10.84 15.79 11.04 C16.22 11.24 16.41 11.76 16.20 12.18 Z M15.13 5.84 C15.13 3.57 13.27 1.72 11.00 1.72 C8.73 1.72 6.88 3.57 6.88 5.84 C6.88 8.05 8.61 9.85 10.79 9.96 C10.86 9.96 10.93 9.96 11.00 9.96 C11.07 9.96 11.14 9.96 11.21 9.96 C13.39 9.85 15.13 8.05 15.13 5.84 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 8.16 8.16" style={styles.path44}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M7.30 3.22 L4.94 3.22 L4.94 0.86 C4.94 0.38 4.56 0.00 4.08 0.00 C3.61 0.00 3.22 0.38 3.22 0.86 L3.22 3.22 L0.86 3.22 C0.38 3.22 0.00 3.61 0.00 4.08 C0.00 4.56 0.38 4.94 0.86 4.94 L3.22 4.94 L3.22 7.30 C3.22 7.78 3.61 8.16 4.08 8.16 C4.56 8.16 4.94 7.78 4.94 7.30 L4.94 4.94 L7.30 4.94 C7.78 4.94 8.16 4.56 8.16 4.08 C8.16 3.61 7.78 3.22 7.30 3.22 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle43}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  add: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path43: {
    position: "absolute",
    height: 22,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path44: {
    position: "absolute",
    height: 8,
    width: 8,
    top: 14,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path43Stack: {
    width: 22,
    height: 22
  },
  rectangle43: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  addStack: {
    width: 24,
    height: 24
  }
});

export default IconsAdd1;
