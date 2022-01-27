import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsUser(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.userStack}>
        <View style={styles.user}>
          <Svg viewBox="0 0 22 22" style={styles.path32}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M21.41 21.04 C20.92 21.65 19.39 22.00 19.39 22.00 L2.61 22.00 C2.61 22.00 1.08 21.65 0.59 21.04 C0.09 20.42 -0.11 19.63 0.06 18.85 C0.57 16.37 1.94 14.12 3.90 12.50 C4.97 11.62 6.20 10.95 7.50 10.52 C6.08 9.46 5.16 7.76 5.16 5.84 C5.16 2.62 7.78 0.00 11.00 0.00 C14.22 0.00 16.84 2.62 16.84 5.84 C16.84 7.75 15.92 9.45 14.50 10.52 C16.83 11.29 18.88 12.82 20.29 14.92 C20.56 15.32 20.45 15.85 20.06 16.11 C19.66 16.38 19.13 16.27 18.86 15.88 C17.14 13.31 14.30 11.76 11.23 11.68 C11.15 11.69 11.08 11.69 11.00 11.69 C10.92 11.69 10.85 11.69 10.77 11.68 C6.41 11.79 2.63 14.92 1.74 19.20 C1.68 19.47 1.75 19.74 1.92 19.95 C2.02 20.08 2.61 20.28 2.61 20.28 L19.39 20.28 C19.39 20.28 19.98 20.08 20.08 19.95 C20.25 19.74 20.32 19.47 20.26 19.20 C20.16 18.74 20.46 18.28 20.93 18.19 C21.39 18.09 21.85 18.39 21.94 18.85 C22.11 19.63 21.91 20.42 21.41 21.04 Z M10.79 9.96 C10.86 9.96 10.93 9.96 11.00 9.96 C11.07 9.96 11.14 9.96 11.21 9.96 C13.39 9.85 15.13 8.05 15.13 5.84 C15.13 3.57 13.27 1.72 11.00 1.72 C8.73 1.72 6.88 3.57 6.88 5.84 C6.88 8.05 8.61 9.85 10.79 9.96 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle33}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  user: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path32: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle33: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  userStack: {
    width: 24,
    height: 24
  }
});

export default IconsUser;
