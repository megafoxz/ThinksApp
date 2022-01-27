import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsArCamera(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.arCameraStack}>
        <View style={styles.arCamera}>
          <View style={styles.path30Stack}>
            <Svg viewBox="0 0 22 19.85" style={styles.path30}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M21.14 12.98 C21.62 12.98 22.00 12.59 22.00 12.12 L22.00 6.53 C22.00 4.64 20.46 3.09 18.56 3.09 L17.26 3.09 C16.89 3.09 16.56 2.86 16.44 2.51 L16.18 1.75 C15.83 0.70 14.85 0.00 13.74 0.00 L8.25 0.00 C7.17 0.00 6.20 0.68 5.83 1.70 L5.53 2.53 C5.41 2.87 5.08 3.09 4.72 3.09 L3.44 3.09 C1.54 3.09 0.00 4.64 0.00 6.53 L0.00 16.41 C0.00 18.31 1.54 19.85 3.44 19.85 L18.56 19.85 C20.46 19.85 22.00 18.31 22.00 16.41 C22.00 15.94 21.62 15.55 21.14 15.55 C20.67 15.55 20.28 15.94 20.28 16.41 C20.28 17.36 19.51 18.13 18.56 18.13 L3.44 18.13 C2.49 18.13 1.72 17.36 1.72 16.41 L1.72 6.53 C1.72 5.58 2.49 4.81 3.44 4.81 L4.72 4.81 C5.81 4.81 6.78 4.13 7.15 3.11 L7.45 2.29 C7.57 1.95 7.89 1.72 8.25 1.72 L13.74 1.72 C14.11 1.72 14.44 1.95 14.56 2.30 L14.82 3.07 C15.17 4.11 16.15 4.81 17.26 4.81 L18.56 4.81 C19.51 4.81 20.28 5.58 20.28 6.53 L20.28 12.12 C20.28 12.59 20.67 12.98 21.14 12.98 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 10.74 10.74" style={styles.path31}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M10.74 5.37 C10.74 8.33 8.33 10.74 5.37 10.74 C2.41 10.74 0.00 8.33 0.00 5.37 C0.00 2.41 2.41 0.00 5.37 0.00 C8.33 0.00 10.74 2.41 10.74 5.37 Z M9.02 5.37 C9.02 3.36 7.38 1.72 5.37 1.72 C3.36 1.72 1.72 3.36 1.72 5.37 C1.72 7.38 3.36 9.02 5.37 9.02 C7.38 9.02 9.02 7.38 9.02 5.37 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle32}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  arCamera: {
    position: "absolute",
    top: 2,
    left: 1,
    height: 20,
    width: 22
  },
  path30: {
    position: "absolute",
    height: 20,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path31: {
    position: "absolute",
    height: 11,
    width: 11,
    top: 6,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path30Stack: {
    width: 22,
    height: 20
  },
  rectangle32: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  arCameraStack: {
    width: 24,
    height: 24
  }
});

export default IconsArCamera;
