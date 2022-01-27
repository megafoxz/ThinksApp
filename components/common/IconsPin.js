import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsPin(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.pinStack}>
        <View style={styles.pin}>
          <View style={styles.path24Stack}>
            <Svg viewBox="0 0 10.74 10.74" style={styles.path24}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.37 0.00 C2.41 0.00 0.00 2.41 0.00 5.37 C0.00 8.33 2.41 10.74 5.37 10.74 C5.87 10.74 6.37 10.67 6.84 10.54 C7.30 10.41 7.57 9.93 7.44 9.48 C7.31 9.02 6.83 8.75 6.37 8.88 C6.05 8.98 5.71 9.02 5.37 9.02 C3.36 9.02 1.72 7.38 1.72 5.37 C1.72 3.36 3.36 1.72 5.37 1.72 C7.38 1.72 9.02 3.36 9.02 5.37 C9.02 5.73 8.97 6.08 8.87 6.42 C8.73 6.88 8.99 7.36 9.45 7.49 C9.90 7.63 10.38 7.37 10.52 6.92 C10.67 6.42 10.74 5.90 10.74 5.37 C10.74 2.41 8.33 0.00 5.37 0.00 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 17.62 22" style={styles.path25}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M17.62 8.80 C17.62 10.51 17.14 12.12 16.16 13.71 C15.32 15.09 14.22 16.29 13.05 17.57 C11.91 18.82 10.73 20.11 9.79 21.60 C9.64 21.85 9.07 22.00 9.07 22.00 L8.55 22.00 C8.55 22.00 7.98 21.85 7.82 21.60 C6.88 20.11 5.70 18.82 4.56 17.57 C3.40 16.29 2.30 15.09 1.45 13.71 C0.48 12.12 0.00 10.51 0.00 8.80 C0.00 6.45 0.92 4.24 2.58 2.58 C4.25 0.92 6.46 0.00 8.81 0.00 C11.16 0.00 13.37 0.92 15.03 2.58 C16.70 4.24 17.61 6.45 17.62 8.80 Z M15.90 8.80 C15.89 4.90 12.71 1.72 8.81 1.72 C4.90 1.72 1.72 4.90 1.72 8.80 C1.72 11.91 3.63 13.99 5.83 16.41 C6.85 17.52 7.89 18.66 8.81 19.98 C9.73 18.66 10.77 17.52 11.79 16.41 C13.99 13.99 15.90 11.91 15.90 8.80 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle26}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pin: {
    position: "absolute",
    top: 1,
    left: 3,
    height: 22,
    width: 18
  },
  path24: {
    position: "absolute",
    height: 11,
    width: 11,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path25: {
    position: "absolute",
    height: 22,
    width: 18,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path24Stack: {
    width: 18,
    height: 22
  },
  rectangle26: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  pinStack: {
    width: 24,
    height: 24
  }
});

export default IconsPin;
