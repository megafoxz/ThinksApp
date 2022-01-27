import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsHide(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.hideStack}>
        <View style={styles.hide}>
          <View style={styles.path57Stack}>
            <Svg viewBox="0 0 22 22" style={styles.path57}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M21.75 21.75 C21.58 21.92 21.36 22.00 21.14 22.00 C20.92 22.00 20.53 21.75 20.53 21.75 L16.48 17.70 C16.48 17.70 12.87 19.34 11.02 19.34 C8.78 19.34 6.56 18.53 4.43 16.95 C2.32 15.38 1.03 13.59 0.57 12.89 C-0.19 11.74 -0.19 10.26 0.57 9.11 C0.92 8.57 4.09 5.31 4.09 5.31 L0.25 1.47 C0.25 1.47 -0.08 0.59 0.25 0.25 C0.59 -0.08 1.47 0.25 1.47 0.25 L6.03 4.81 L17.20 15.98 L17.22 16.00 L21.75 20.53 Z M7.82 11.00 C7.82 12.75 9.25 14.18 11.00 14.18 C11.56 14.18 12.56 13.77 12.56 13.77 L11.42 12.63 C11.42 12.63 10.28 12.61 9.86 12.18 C9.44 11.76 9.41 10.62 9.41 10.62 L8.23 9.44 C8.23 9.44 7.82 10.45 7.82 11.00 Z M15.23 16.44 L13.80 15.02 C13.80 15.02 12.02 15.90 11.00 15.90 C8.30 15.90 6.10 13.70 6.10 11.00 C6.10 9.99 6.98 8.20 6.98 8.20 L5.32 6.53 C5.32 6.53 2.33 9.56 2.00 10.06 C1.62 10.63 1.62 11.37 2.00 11.94 C3.39 14.05 6.85 17.62 11.02 17.62 C12.42 17.62 15.23 16.44 15.23 16.44 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 14.18 12.67" style={styles.path58}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M13.64 6.48 C13.64 6.47 13.63 6.47 13.63 6.46 C13.17 5.76 11.88 3.96 9.79 2.39 C7.66 0.81 5.45 0.00 3.20 0.00 C2.35 0.00 1.48 0.12 0.63 0.36 C0.17 0.49 -0.10 0.96 0.03 1.42 C0.16 1.87 0.63 2.14 1.09 2.01 C1.79 1.82 2.50 1.72 3.20 1.72 C7.36 1.72 10.78 5.26 12.17 7.37 C12.17 7.38 12.18 7.39 12.18 7.39 C12.37 7.67 12.47 8.00 12.47 8.34 C12.47 8.67 12.37 9.00 12.18 9.28 C11.77 9.91 11.22 10.60 10.62 11.22 C10.30 11.56 10.31 12.11 10.65 12.43 C10.82 12.59 11.03 12.67 11.25 12.67 C11.47 12.67 11.70 12.58 11.87 12.40 C12.72 11.51 13.29 10.73 13.62 10.22 C13.99 9.66 14.18 9.01 14.18 8.34 C14.18 7.68 14.00 7.04 13.64 6.48 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 4.76 4.79" style={styles.path59}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M4.74 3.74 C4.33 1.90 2.89 0.44 1.05 0.02 C0.59 -0.08 0.13 0.20 0.02 0.67 C-0.08 1.13 0.21 1.59 0.67 1.70 C1.86 1.97 2.80 2.92 3.06 4.11 C3.15 4.51 3.50 4.79 3.90 4.79 C3.96 4.79 4.02 4.78 4.08 4.77 C4.55 4.66 4.84 4.21 4.74 3.74 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle57}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hide: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path57: {
    position: "absolute",
    height: 22,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path58: {
    position: "absolute",
    height: 13,
    width: 14,
    top: 3,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path59: {
    position: "absolute",
    height: 5,
    width: 5,
    top: 6,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path57Stack: {
    width: 22,
    height: 22
  },
  rectangle57: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  hideStack: {
    width: 24,
    height: 24
  }
});

export default IconsHide;
