import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsEye(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.eyeStack}>
        <View style={styles.eye}>
          <View style={styles.oval24Stack}>
            <Svg viewBox="0 0 3.35 3.35" style={styles.oval24}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M1.68 3.35 C2.60 3.35 3.35 2.60 3.35 1.68 C3.35 0.75 2.60 0.00 1.68 0.00 C0.75 0.00 0.00 0.75 0.00 1.68 C0.00 2.60 0.75 3.35 1.68 3.35 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 9.8 9.8" style={styles.path55}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M9.80 4.90 C9.80 7.60 7.60 9.80 4.90 9.80 C2.20 9.80 0.00 7.60 0.00 4.90 C0.00 2.20 2.20 0.00 4.90 0.00 C7.60 0.00 9.80 2.20 9.80 4.90 Z M8.08 4.90 C8.08 3.15 6.65 1.72 4.90 1.72 C3.15 1.72 1.72 3.15 1.72 4.90 C1.72 6.65 3.15 8.08 4.90 8.08 C6.65 8.08 8.08 6.65 8.08 4.90 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 22 16.67" style={styles.path56}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M21.44 6.46 C20.99 5.76 19.70 3.96 17.60 2.39 C15.48 0.81 13.26 0.00 11.02 0.00 C8.78 0.00 6.56 0.80 4.43 2.39 C2.32 3.95 1.03 5.75 0.57 6.45 C-0.19 7.59 -0.19 9.08 0.57 10.22 C1.03 10.92 2.32 12.72 4.43 14.28 C6.56 15.87 8.78 16.67 11.02 16.67 C14.47 16.67 17.25 14.75 18.97 13.13 C19.31 12.81 19.33 12.26 19.01 11.92 C18.68 11.57 18.14 11.55 17.79 11.88 C16.30 13.28 13.91 14.95 11.02 14.95 C6.85 14.95 3.39 11.39 2.00 9.28 C1.62 8.71 1.62 7.97 2.00 7.39 C3.39 5.29 6.85 1.72 11.02 1.72 C15.19 1.72 18.63 5.29 20.00 7.40 C20.37 7.97 20.37 8.70 20.00 9.27 C19.74 9.67 19.86 10.20 20.25 10.46 C20.65 10.72 21.18 10.61 21.44 10.21 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle56}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  eye: {
    position: "absolute",
    top: 3,
    left: 1,
    height: 17,
    width: 22
  },
  oval24: {
    position: "absolute",
    height: 3,
    width: 3,
    top: 7,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path55: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 3,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path56: {
    position: "absolute",
    height: 17,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval24Stack: {
    width: 22,
    height: 17
  },
  rectangle56: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  eyeStack: {
    width: 24,
    height: 24
  }
});

export default IconsEye;
