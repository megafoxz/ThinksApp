import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsCash(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cash}>
        <View style={styles.path168Stack}>
          <Svg viewBox="0 0 24 23.95" style={styles.path168}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M23.06 10.12 C23.58 10.12 24.00 9.70 24.00 9.19 L24.00 3.75 C24.00 1.68 22.32 0.00 20.25 0.00 L3.75 0.00 C1.68 0.00 0.00 1.68 0.00 3.75 L0.00 12.98 C0.00 13.18 -0.00 14.89 0.00 15.12 C0.03 16.26 0.80 17.29 1.91 17.69 L17.28 23.78 L17.31 23.79 C17.62 23.90 17.94 23.95 18.25 23.95 C18.67 23.95 19.10 23.85 19.49 23.66 C19.95 23.43 20.15 22.87 19.92 22.41 C19.69 21.94 19.13 21.75 18.66 21.98 C18.44 22.09 18.19 22.11 17.95 22.03 L11.04 19.29 L19.53 20.76 L19.54 20.76 C19.70 20.79 19.85 20.80 20.00 20.80 C20.71 20.80 21.39 20.53 21.92 20.03 C22.30 19.68 22.32 19.09 21.96 18.71 C21.61 18.33 21.02 18.31 20.64 18.67 C20.43 18.87 20.14 18.96 19.85 18.91 L12.40 17.62 L20.25 17.62 C22.32 17.62 24.00 15.94 24.00 13.87 C24.00 13.36 23.58 12.94 23.06 12.94 C22.54 12.94 22.13 13.36 22.13 13.87 C22.13 14.91 21.28 15.75 20.25 15.75 L3.75 15.75 C2.72 15.75 1.88 14.91 1.88 13.87 L1.88 3.75 C1.88 2.72 2.72 1.87 3.75 1.87 L20.25 1.87 C21.28 1.87 22.13 2.72 22.13 3.75 L22.13 9.19 C22.13 9.70 22.54 10.12 23.06 10.12 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 1.87 1.87" style={styles.oval26}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.94 1.87 C1.46 1.87 1.87 1.46 1.87 0.94 C1.87 0.42 1.46 0.00 0.94 0.00 C0.42 0.00 0.00 0.42 0.00 0.94 C0.00 1.46 0.42 1.87 0.94 1.87 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 9.47 10.12" style={styles.path169}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M4.73 0.00 C7.34 0.00 9.47 2.27 9.47 5.06 C9.47 7.85 7.34 10.12 4.73 10.12 C2.12 10.12 0.00 7.85 0.00 5.06 C0.00 2.27 2.12 0.00 4.73 0.00 Z M4.73 1.87 C3.16 1.87 1.87 3.30 1.87 5.06 C1.87 6.82 3.16 8.25 4.73 8.25 C6.31 8.25 7.59 6.82 7.59 5.06 C7.59 3.30 6.31 1.87 4.73 1.87 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 1.87 1.87" style={styles.oval27}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.94 1.87 C1.46 1.87 1.87 1.46 1.87 0.94 C1.87 0.42 1.46 0.00 0.94 0.00 C0.42 0.00 0.00 0.42 0.00 0.94 C0.00 1.46 0.42 1.87 0.94 1.87 Z"
            ></Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cash: {
    height: 24,
    width: 24
  },
  path168: {
    position: "absolute",
    height: 24,
    width: 24,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval26: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 8,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path169: {
    position: "absolute",
    height: 10,
    width: 9,
    top: 4,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval27: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 8,
    left: 4,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path168Stack: {
    width: 24,
    height: 24
  }
});

export default IconsCash;
