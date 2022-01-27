import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsReport(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.reportStack}>
        <View style={styles.report}>
          <Svg viewBox="0 0 17.44 22" style={styles.path54}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M7.90 16.50 L7.90 14.35 L5.75 14.35 C5.75 14.35 4.89 13.97 4.89 13.49 C4.89 13.02 5.75 12.63 5.75 12.63 L7.90 12.63 L7.90 10.48 C7.90 10.48 8.29 9.63 8.76 9.63 C9.24 9.63 9.62 10.48 9.62 10.48 L9.62 12.63 L11.77 12.63 C11.77 12.63 12.63 13.02 12.63 13.49 C12.63 13.97 11.77 14.35 11.77 14.35 L9.62 14.35 L9.62 16.50 C9.62 16.50 9.24 17.36 8.76 17.36 C8.29 17.36 7.90 16.50 7.90 16.50 Z M15.72 14.31 L15.72 5.59 L14.00 3.87 L11.30 3.87 L11.30 4.30 C11.30 4.30 10.14 6.88 8.72 6.88 C7.30 6.88 6.14 4.30 6.14 4.30 L6.14 3.87 L3.44 3.87 L1.72 5.59 L1.72 18.56 L3.44 20.28 L14.00 20.28 C14.00 20.28 15.72 19.51 15.72 18.56 C15.72 18.09 16.11 17.70 16.58 17.70 C17.06 17.70 17.44 18.09 17.44 18.56 C17.44 20.46 14.00 22.00 14.00 22.00 L3.44 22.00 L0.00 18.56 L0.00 5.59 L3.44 2.15 L6.14 2.15 L6.14 0.86 L7.00 0.00 L10.44 0.00 L11.30 0.86 L11.30 2.15 L14.00 2.15 L17.44 5.59 L17.44 14.31 C17.44 14.31 17.06 15.17 16.58 15.17 C16.11 15.17 15.72 14.31 15.72 14.31 Z M9.58 1.72 L7.86 1.72 L7.86 4.30 C7.86 4.30 8.24 5.16 8.72 5.16 C9.19 5.16 9.58 4.30 9.58 4.30 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle52}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  report: {
    position: "absolute",
    top: 1,
    left: 3,
    height: 22,
    width: 17
  },
  path54: {
    height: 22,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle52: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  reportStack: {
    width: 24,
    height: 24
  }
});

export default IconsReport;
