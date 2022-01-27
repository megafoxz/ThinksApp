import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsDrop1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.dropStack}>
        <View style={styles.drop}>
          <Svg viewBox="0 0 16.77 22" style={styles.path189}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M8.38 22.00 C3.76 22.00 0.00 13.64 0.00 13.64 L0.00 13.41 C0.00 13.41 2.43 7.73 4.57 5.28 C6.02 3.62 7.52 1.90 7.52 0.86 C7.52 0.38 7.90 0.00 8.38 0.00 C8.85 0.00 9.23 0.38 9.23 0.86 C9.23 1.96 10.76 3.69 12.23 5.36 C14.36 7.77 16.77 13.41 16.77 13.41 L16.77 13.64 C16.77 13.64 16.49 16.02 15.96 17.17 C15.76 17.60 15.24 17.79 14.82 17.59 C14.39 17.39 14.20 16.88 14.40 16.45 C14.83 15.52 15.05 13.64 15.05 13.64 L15.05 13.41 C15.05 13.41 12.87 8.68 10.95 6.50 C9.94 5.35 9.00 4.29 8.36 3.28 C7.74 4.26 6.83 5.29 5.86 6.41 C3.92 8.63 1.72 13.41 1.72 13.41 L1.72 13.64 C1.72 13.64 4.70 20.28 8.38 20.28 C9.66 20.28 10.91 19.92 11.99 19.22 C12.39 18.96 12.92 19.07 13.18 19.47 C13.44 19.87 13.32 20.40 12.93 20.66 C11.57 21.53 10.00 22.00 8.38 22.00 Z M8.36 18.61 C7.89 18.61 7.50 18.23 7.50 17.75 C7.50 17.28 7.89 16.90 8.36 16.90 C10.18 16.90 11.66 15.43 11.66 13.64 C11.66 13.16 12.05 12.78 12.52 12.78 C13.00 12.78 13.38 13.16 13.38 13.64 C13.38 16.38 11.13 18.61 8.36 18.61 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle105}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drop: {
    position: "absolute",
    top: 1,
    left: 4,
    height: 22,
    width: 17
  },
  path189: {
    height: 22,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle105: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  dropStack: {
    width: 24,
    height: 24
  }
});

export default IconsDrop1;
