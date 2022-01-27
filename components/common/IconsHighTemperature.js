import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsHighTemperature(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.highTemperatureStack}>
        <View style={styles.highTemperature}>
          <View style={styles.path187Stack}>
            <Svg viewBox="0 0 11.6 22" style={styles.path187}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M10.74 8.25 C11.22 8.25 11.60 7.87 11.60 7.39 C11.60 6.92 11.22 6.53 10.74 6.53 L9.02 6.53 L9.02 5.20 L10.74 5.20 C11.22 5.20 11.60 4.81 11.60 4.34 C11.60 3.87 11.22 3.48 10.74 3.48 L9.00 3.48 C8.81 1.53 7.16 0.00 5.16 0.00 C3.02 0.00 1.29 1.73 1.29 3.87 L1.29 13.43 C0.46 14.38 0.00 15.57 0.00 16.84 C0.00 19.69 2.31 22.00 5.16 22.00 C8.00 22.00 10.31 19.69 10.31 16.84 C10.31 15.76 9.98 14.73 9.36 13.85 C9.08 13.47 8.54 13.38 8.16 13.65 C7.77 13.93 7.68 14.46 7.96 14.85 C8.37 15.43 8.59 16.12 8.59 16.84 C8.59 18.74 7.05 20.28 5.16 20.28 C3.26 20.28 1.72 18.74 1.72 16.84 C1.72 15.91 2.08 15.04 2.75 14.39 C2.91 14.23 3.01 14.01 3.01 13.78 L3.01 3.87 C3.01 2.68 3.97 1.72 5.16 1.72 C6.34 1.72 7.30 2.68 7.30 3.87 L7.30 10.40 C7.30 10.87 7.69 11.26 8.16 11.26 L10.74 11.26 C11.22 11.26 11.60 10.87 11.60 10.40 C11.60 9.92 11.22 9.54 10.74 9.54 L9.02 9.54 L9.02 8.25 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 3.44 15.55" style={styles.path188}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M1.72 0.00 C1.24 0.00 0.86 0.38 0.86 0.86 L0.86 12.35 C0.35 12.64 0.00 13.20 0.00 13.84 C0.00 14.79 0.77 15.55 1.72 15.55 C2.67 15.55 3.44 14.79 3.44 13.84 C3.44 13.20 3.09 12.64 2.58 12.35 L2.58 0.86 C2.58 0.38 2.19 0.00 1.72 0.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle104}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  highTemperature: {
    position: "absolute",
    top: 1,
    left: 6,
    height: 22,
    width: 12
  },
  path187: {
    position: "absolute",
    height: 22,
    width: 12,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path188: {
    position: "absolute",
    height: 16,
    width: 3,
    top: 3,
    left: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path187Stack: {
    width: 12,
    height: 22
  },
  rectangle104: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  highTemperatureStack: {
    width: 24,
    height: 24
  }
});

export default IconsHighTemperature;
