import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsSkeleton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.skeletonStack}>
        <View style={styles.skeleton}>
          <Svg viewBox="0 0 22 22" style={styles.path51}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M12.91 12.25 C12.91 12.25 12.97 12.25 13.02 12.24 C14.66 12.22 16.08 12.58 17.24 13.32 C17.39 13.41 17.55 13.45 17.70 13.45 C17.99 13.45 18.27 13.31 18.43 13.05 C18.68 12.65 18.56 12.12 18.16 11.86 C16.71 10.94 14.97 10.50 12.99 10.53 C12.96 10.53 12.91 10.53 12.91 10.53 L11.82 10.53 L11.82 8.73 L12.80 8.73 L12.84 8.73 C12.84 8.73 12.86 8.73 12.87 8.73 C14.58 8.73 15.92 9.12 16.55 9.82 C16.72 10.00 16.95 10.10 17.19 10.10 C17.39 10.10 17.60 10.02 17.77 9.87 C18.12 9.55 18.14 9.01 17.82 8.66 C16.52 7.23 12.87 7.01 12.87 7.01 L11.82 7.01 L11.82 5.24 L13.11 5.24 C13.11 5.24 14.55 5.41 15.17 5.94 C15.53 6.25 16.07 6.20 16.38 5.84 C16.69 5.48 16.64 4.94 16.28 4.63 C15.25 3.75 13.11 3.52 13.11 3.52 L8.85 3.52 C8.85 3.52 6.71 3.79 5.72 4.63 C5.36 4.93 5.31 5.48 5.62 5.84 C5.79 6.04 6.03 6.14 6.27 6.14 C6.47 6.14 6.67 6.08 6.83 5.94 C7.41 5.45 8.85 5.24 8.85 5.24 L10.10 5.24 L10.10 7.01 L9.15 7.01 C9.15 7.01 9.11 7.01 9.08 7.01 C6.32 6.96 4.87 7.88 4.14 8.65 C3.82 8.99 3.83 9.54 4.18 9.86 C4.53 10.19 5.07 10.17 5.39 9.83 C5.89 9.31 6.92 8.69 9.06 8.73 C9.10 8.73 9.15 8.73 9.15 8.73 L10.10 8.73 L10.10 10.53 L9.05 10.53 C9.05 10.53 9.00 10.53 8.97 10.53 C7.01 10.49 5.29 10.94 3.84 11.86 C3.44 12.12 3.32 12.65 3.57 13.05 C3.82 13.45 4.36 13.57 4.76 13.32 C5.92 12.58 7.33 12.22 8.94 12.24 C8.98 12.25 9.05 12.25 9.05 12.25 L10.10 12.25 L10.10 14.05 L9.05 14.05 C9.05 14.05 9.00 14.05 8.97 14.05 C6.99 14.02 5.25 14.47 3.79 15.39 C3.39 15.64 3.27 16.18 3.53 16.58 C3.78 16.98 4.31 17.10 4.71 16.84 C5.88 16.11 7.30 15.75 8.94 15.77 C8.98 15.77 9.05 15.77 9.05 15.77 L10.10 15.77 L10.10 17.70 C10.10 17.70 10.48 18.56 10.96 18.56 C11.43 18.56 11.82 17.70 11.82 17.70 L11.82 15.77 L12.91 15.77 C12.91 15.77 12.97 15.77 13.02 15.77 C14.66 15.75 16.08 16.11 17.24 16.84 C17.39 16.93 17.55 16.98 17.70 16.98 C17.99 16.98 18.27 16.83 18.43 16.58 C18.68 16.18 18.56 15.64 18.16 15.39 C16.71 14.47 14.97 14.02 12.99 14.05 C12.96 14.05 12.91 14.05 12.91 14.05 L11.82 14.05 L11.82 12.25 Z M21.14 15.13 C21.62 15.13 22.00 14.27 22.00 14.27 L22.00 3.44 L18.56 0.00 L3.44 0.00 L0.00 3.44 L0.00 18.56 L3.44 22.00 L18.56 22.00 C18.56 22.00 22.00 20.46 22.00 18.56 C22.00 18.09 21.62 17.70 21.14 17.70 C20.67 17.70 20.28 18.09 20.28 18.56 C20.28 19.51 18.56 20.28 18.56 20.28 L3.44 20.28 L1.72 18.56 L1.72 3.44 L3.44 1.72 L18.56 1.72 L20.28 3.44 L20.28 14.27 C20.28 14.27 20.67 15.13 21.14 15.13 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle49}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  skeleton: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path51: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle49: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  skeletonStack: {
    width: 24,
    height: 24
  }
});

export default IconsSkeleton;
