import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsHeadset(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.headsetStack}>
        <View style={styles.headset}>
          <View style={styles.path34Stack}>
            <Svg viewBox="0 0 19.76 18.52" style={styles.path34}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M6.02 9.58 L6.02 17.66 L5.16 18.52 L3.44 18.52 L0.00 15.08 L0.00 12.16 C0.00 12.16 0.69 9.78 1.72 9.18 C1.74 6.74 2.71 4.45 4.44 2.72 C6.19 0.97 8.52 0.00 11.00 0.00 C12.93 0.00 14.79 0.59 16.36 1.70 C17.90 2.79 19.06 4.30 19.71 6.06 C19.87 6.51 19.64 7.00 19.20 7.17 C18.75 7.33 18.26 7.10 18.10 6.66 C17.00 3.70 14.15 1.72 11.00 1.72 C7.02 1.72 3.46 8.72 3.46 8.72 L5.16 8.72 L6.02 9.58 Z M4.30 10.44 L3.44 10.44 L1.72 12.16 L1.72 15.08 L3.44 16.80 L4.30 16.80 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 12.72 13.28" style={styles.path35}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M12.72 3.44 L12.72 6.36 L9.28 9.80 L8.42 9.80 L8.42 9.84 L5.84 12.42 L3.22 12.42 L3.22 12.39 C3.22 12.39 2.37 13.28 1.72 13.28 C0.77 13.28 0.00 12.51 0.00 11.56 C0.00 10.61 0.77 9.84 1.72 9.84 C2.37 9.84 3.22 10.73 3.22 10.73 L3.22 10.70 L5.84 10.70 L6.70 9.84 L6.70 0.86 L7.56 0.00 L9.28 0.00 L12.72 3.44 Z M11.00 3.44 L9.28 1.72 L8.42 1.72 L8.42 8.08 L9.28 8.08 L11.00 6.36 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle35}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headset: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path34: {
    position: "absolute",
    height: 19,
    width: 20,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path35: {
    position: "absolute",
    height: 13,
    width: 13,
    top: 9,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path34Stack: {
    width: 22,
    height: 22
  },
  rectangle35: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  headsetStack: {
    width: 24,
    height: 24
  }
});

export default IconsHeadset;
