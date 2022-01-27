import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsStar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.star1Stack}>
        <View style={styles.star1}>
          <Svg viewBox="0 0 22 21.31" style={styles.path49}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M16.78 21.31 C16.43 21.31 16.08 21.20 15.77 20.99 L11.17 17.78 C11.07 17.71 10.93 17.71 10.83 17.78 L6.22 20.99 C5.60 21.42 4.79 21.42 4.18 20.97 C3.56 20.52 3.30 19.76 3.52 19.03 L5.15 13.64 C5.19 13.52 5.15 13.40 5.05 13.32 L0.69 9.96 C0.08 9.49 -0.15 8.71 0.10 7.99 C0.35 7.26 1.00 6.79 1.77 6.79 L7.21 6.79 C7.34 6.79 7.45 6.72 7.49 6.60 L9.33 1.20 C9.58 0.47 10.23 0.00 11.00 0.00 C11.77 0.00 12.42 0.47 12.67 1.20 L14.51 6.60 C14.55 6.72 14.66 6.79 14.79 6.79 L20.23 6.79 C21.00 6.79 21.65 7.26 21.90 7.98 C22.15 8.71 21.92 9.49 21.31 9.96 L16.95 13.32 C16.85 13.40 16.81 13.52 16.84 13.64 L16.99 14.11 C17.12 14.57 16.87 15.05 16.41 15.18 C15.96 15.32 15.48 15.06 15.34 14.61 L15.20 14.14 C14.96 13.34 15.24 12.47 15.90 11.96 L20.26 8.60 C20.28 8.58 20.28 8.58 20.28 8.56 C20.28 8.54 20.26 8.51 20.26 8.51 C20.26 8.51 20.25 8.51 20.23 8.51 L14.79 8.51 C13.92 8.51 13.16 7.96 12.88 7.16 L11.04 1.75 C11.04 1.73 11.03 1.72 11.00 1.72 C10.97 1.72 10.96 1.73 10.95 1.75 L9.12 7.16 C8.84 7.96 8.08 8.51 7.21 8.51 L1.77 8.51 C1.75 8.51 1.74 8.51 1.74 8.51 C1.74 8.51 1.72 8.53 1.72 8.56 C1.72 8.58 1.72 8.58 1.74 8.60 L6.10 11.96 C6.76 12.47 7.04 13.34 6.80 14.14 L5.17 19.53 C5.16 19.55 5.16 19.56 5.19 19.58 C5.21 19.60 5.22 19.59 5.24 19.58 L9.85 16.37 C10.54 15.89 11.46 15.89 12.15 16.37 L16.76 19.58 C16.78 19.59 16.78 19.60 16.81 19.58 C16.84 19.56 16.83 19.55 16.83 19.53 L16.59 18.73 C16.45 18.28 16.71 17.80 17.16 17.66 C17.62 17.53 18.10 17.78 18.23 18.24 L18.47 19.03 C18.69 19.76 18.44 20.52 17.82 20.97 C17.51 21.20 17.15 21.31 16.78 21.31 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle47}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  star1: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 21,
    width: 22
  },
  path49: {
    height: 21,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle47: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  star1Stack: {
    width: 24,
    height: 24
  }
});

export default IconsStar1;
