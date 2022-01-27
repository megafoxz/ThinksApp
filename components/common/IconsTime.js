import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsTime(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.timeStack}>
        <View style={styles.time}>
          <View style={styles.path41Stack}>
            <Svg viewBox="0 0 22 22" style={styles.path41}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M18.78 3.22 C16.70 1.14 13.94 0.00 11.00 0.00 C8.06 0.00 5.30 1.14 3.22 3.22 C1.14 5.30 0.00 8.06 0.00 11.00 C0.00 13.94 1.14 16.70 3.22 18.78 C5.30 20.86 8.06 22.00 11.00 22.00 C13.01 22.00 14.98 21.45 16.69 20.41 C17.10 20.17 17.23 19.64 16.98 19.23 C16.74 18.83 16.21 18.70 15.80 18.94 C14.36 19.82 12.70 20.28 11.00 20.28 C5.88 20.28 1.72 16.12 1.72 11.00 C1.72 5.88 5.88 1.72 11.00 1.72 C16.12 1.72 20.28 5.88 20.28 11.00 C20.28 12.83 19.74 14.61 18.71 16.15 C18.44 16.55 18.55 17.08 18.94 17.34 C19.34 17.61 19.87 17.50 20.14 17.11 C21.36 15.28 22.00 13.17 22.00 11.00 C22.00 8.06 20.86 5.30 18.78 3.22 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 5.12 12" style={styles.path42}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M4.26 0.00 C3.79 0.00 3.40 0.38 3.40 0.86 L3.40 7.38 L0.25 10.53 C-0.08 10.87 -0.08 11.41 0.25 11.74 C0.42 11.91 0.64 12.00 0.86 12.00 C1.08 12.00 1.30 11.91 1.47 11.74 L4.87 8.34 C5.03 8.18 5.12 7.96 5.12 7.73 L5.12 0.86 C5.12 0.38 4.74 0.00 4.26 0.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle42}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  time: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path41: {
    position: "absolute",
    height: 22,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path42: {
    position: "absolute",
    height: 12,
    width: 5,
    top: 3,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path41Stack: {
    width: 22,
    height: 22
  },
  rectangle42: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  timeStack: {
    width: 24,
    height: 24
  }
});

export default IconsTime;
