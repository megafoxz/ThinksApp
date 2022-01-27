import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsShare(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.shareStack}>
        <View style={styles.share}>
          <View style={styles.path46Stack}>
            <Svg viewBox="0 0 10.66 7.57" style={styles.path46}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M10.66 3.88 C10.66 5.92 9.00 7.57 6.96 7.57 C4.92 7.57 3.27 5.92 3.27 3.88 C3.27 3.60 3.36 3.06 3.36 3.06 L0.48 1.63 C0.48 1.63 -0.12 0.90 0.09 0.48 C0.30 0.05 1.24 0.09 1.24 0.09 L4.12 1.52 C4.12 1.52 5.82 0.18 6.96 0.18 C9.00 0.18 10.66 1.84 10.66 3.88 Z M8.94 3.88 C8.94 2.79 8.05 1.90 6.96 1.90 C6.23 1.90 5.58 2.31 5.24 2.90 C5.23 2.94 5.21 2.98 5.20 3.02 C5.18 3.05 5.16 3.08 5.14 3.12 C5.04 3.35 4.98 3.61 4.98 3.88 C4.98 4.97 5.87 5.85 6.96 5.85 C8.05 5.85 8.94 4.97 8.94 3.88 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 22 14.7" style={styles.path47}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M22.00 3.70 C22.00 5.73 20.34 7.39 18.30 7.39 C17.17 7.39 15.47 6.06 15.47 6.06 L7.29 10.16 C7.29 10.16 7.39 10.71 7.39 11.00 C7.39 11.29 7.29 11.85 7.29 11.85 L8.68 12.56 C8.68 12.56 9.27 13.29 9.06 13.72 C8.91 14.01 8.61 14.19 8.29 14.19 C8.16 14.19 7.90 14.09 7.90 14.09 L6.52 13.39 C6.52 13.39 4.82 14.70 3.70 14.70 C1.66 14.70 0.00 13.04 0.00 11.00 C0.00 8.96 1.66 7.30 3.70 7.30 C4.83 7.30 6.52 8.63 6.52 8.63 L14.70 4.52 C14.70 4.52 14.61 3.98 14.61 3.70 C14.61 1.66 16.27 0.00 18.30 0.00 C20.34 0.00 22.00 1.66 22.00 3.70 Z M5.67 11.00 C5.67 9.91 4.79 9.02 3.70 9.02 C2.61 9.02 1.72 9.91 1.72 11.00 C1.72 12.09 2.61 12.98 3.70 12.98 C4.79 12.98 5.67 12.09 5.67 11.00 Z M20.28 3.70 C20.28 2.61 19.39 1.72 18.30 1.72 C17.21 1.72 16.33 2.61 16.33 3.70 C16.33 4.79 17.21 5.67 18.30 5.67 C19.39 5.67 20.28 4.79 20.28 3.70 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle45}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  share: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path46: {
    position: "absolute",
    height: 8,
    width: 11,
    top: 14,
    left: 11,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path47: {
    position: "absolute",
    height: 15,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path46Stack: {
    width: 22,
    height: 22
  },
  rectangle45: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  shareStack: {
    width: 24,
    height: 24
  }
});

export default IconsShare;
