import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsDashboard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dashboardStack}>
        <View style={styles.dashboard}>
          <View style={styles.path170Stack}>
            <Svg viewBox="0 0 11.48 11.48" style={styles.path170}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M11.32 1.47 C10.36 2.87 5.56 9.90 4.80 10.66 C4.25 11.21 3.53 11.48 2.81 11.48 C2.09 11.48 1.37 11.21 0.82 10.66 C-0.27 9.56 -0.27 7.78 0.82 6.68 C1.58 5.93 8.61 1.12 10.02 0.16 C10.39 -0.09 10.89 -0.04 11.21 0.27 C11.53 0.59 11.57 1.09 11.32 1.47 Z M6.90 4.59 C4.44 6.29 2.44 7.72 2.15 8.01 C1.78 8.37 1.78 8.97 2.15 9.33 C2.51 9.70 3.11 9.70 3.47 9.33 C3.76 9.04 5.19 7.04 6.90 4.59 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 17.48 19.08" style={styles.path171}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M4.32 16.36 L3.17 16.93 C2.32 15.41 1.88 13.73 1.88 12.00 C1.88 10.73 2.11 9.52 2.53 8.41 L3.86 9.04 C3.99 9.10 4.13 9.13 4.26 9.13 C4.61 9.13 4.95 8.94 5.11 8.60 C5.33 8.13 5.14 7.57 4.67 7.35 L3.36 6.72 C4.99 4.07 7.80 2.22 11.06 1.92 L11.06 3.33 C11.06 3.85 11.48 4.27 12.00 4.27 C12.52 4.27 12.94 3.85 12.94 3.33 L12.94 1.92 C14.05 2.02 15.14 2.30 16.16 2.77 C16.63 2.98 17.19 2.77 17.40 2.30 C17.61 1.83 17.40 1.27 16.93 1.06 C15.38 0.36 13.72 0.00 12.00 0.00 C8.79 0.00 5.78 1.25 3.51 3.51 C1.25 5.78 0.00 8.79 0.00 12.00 C0.00 14.37 0.70 16.67 2.03 18.66 C2.21 18.93 2.51 19.08 2.81 19.08 C2.95 19.08 3.09 19.05 3.22 18.98 L5.15 18.05 C5.61 17.82 5.80 17.26 5.58 16.79 C5.35 16.33 4.79 16.13 4.32 16.36 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 5.72 12.56" style={styles.path172}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M4.66 0.55 C4.45 0.08 3.89 -0.13 3.42 0.08 C2.95 0.30 2.74 0.85 2.95 1.32 C3.54 2.63 3.84 4.03 3.84 5.48 C3.84 7.21 3.40 8.90 2.55 10.42 L1.34 9.84 C0.87 9.62 0.31 9.82 0.09 10.28 C-0.13 10.75 0.07 11.31 0.53 11.53 L2.50 12.47 C2.63 12.53 2.77 12.56 2.91 12.56 C3.21 12.56 3.51 12.41 3.69 12.15 C5.02 10.16 5.72 7.85 5.72 5.48 C5.72 3.77 5.36 2.11 4.66 0.55 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle101}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dashboard: {
    position: "absolute",
    top: 2,
    left: 0,
    height: 19,
    width: 24
  },
  path170: {
    position: "absolute",
    height: 11,
    width: 11,
    top: 3,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path171: {
    position: "absolute",
    height: 19,
    width: 17,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path172: {
    position: "absolute",
    height: 13,
    width: 6,
    top: 7,
    left: 18,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path170Stack: {
    width: 24,
    height: 20
  },
  rectangle101: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  dashboardStack: {
    width: 24,
    height: 24
  }
});

export default IconsDashboard;
