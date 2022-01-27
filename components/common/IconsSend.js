import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsSend(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.sendStack}>
        <View style={styles.send}>
          <Svg viewBox="0 0 21.94 21.94" style={styles.path45}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.43 7.63 C0.43 7.63 -0.04 7.09 0.01 6.73 C0.06 6.37 0.66 5.98 0.66 5.98 L20.77 0.04 C20.77 0.04 20.87 0.01 20.92 0.01 C20.93 0.00 20.94 0.00 20.94 0.00 C20.99 -0.00 21.04 -0.00 21.09 0.00 C21.11 0.00 21.12 0.01 21.14 0.01 C21.18 0.01 21.22 0.02 21.26 0.03 C21.27 0.03 21.28 0.03 21.29 0.04 C21.30 0.04 21.31 0.04 21.31 0.05 C21.35 0.06 21.39 0.08 21.42 0.09 C21.44 0.10 21.46 0.11 21.47 0.12 C21.51 0.14 21.55 0.16 21.58 0.19 C21.59 0.20 21.60 0.20 21.61 0.21 C21.65 0.25 21.69 0.28 21.73 0.33 C21.74 0.34 21.75 0.35 21.76 0.37 C21.78 0.39 21.80 0.42 21.81 0.45 C21.82 0.45 21.82 0.45 21.82 0.46 C21.86 0.53 21.89 0.62 21.92 0.71 C21.92 0.72 21.92 0.74 21.93 0.75 C21.94 0.84 21.95 0.93 21.94 1.01 C21.93 1.03 21.93 1.04 21.93 1.05 C21.92 1.09 21.91 1.17 21.91 1.17 L15.96 21.29 C15.96 21.29 15.57 21.88 15.21 21.93 C15.17 21.94 15.13 21.94 15.09 21.94 C14.77 21.94 14.31 21.52 14.31 21.52 L8.94 13.00 L0.43 7.63 Z M3.11 7.16 L9.47 11.18 L11.24 9.41 C11.24 9.41 12.18 9.05 12.53 9.41 C12.89 9.77 12.53 10.70 12.53 10.70 L10.76 12.47 L14.78 18.83 L19.13 4.10 L15.28 7.96 C15.28 7.96 14.34 8.32 13.98 7.96 C13.63 7.60 13.98 6.67 13.98 6.67 L17.84 2.81 L3.11 7.16 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle44}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  send: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path45: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle44: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  sendStack: {
    width: 24,
    height: 24
  }
});

export default IconsSend;
