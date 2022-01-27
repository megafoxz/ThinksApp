import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsHelp(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.helpStack}>
        <View style={styles.help}>
          <View style={styles.oval23Stack}>
            <Svg viewBox="0 0 1.72 1.72" style={styles.oval23}>
              <Path
                strokeWidth={0}
                fill="rgba(255,163,123,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M0.86 1.72 C1.33 1.72 1.72 1.33 1.72 0.86 C1.72 0.38 1.33 0.00 0.86 0.00 C0.38 0.00 0.00 0.38 0.00 0.86 C0.00 1.33 0.38 1.72 0.86 1.72 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 22 22" style={styles.path38}>
              <Path
                strokeWidth={0}
                fill="rgba(255,163,123,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M18.78 3.22 C16.70 1.14 13.94 0.00 11.00 0.00 C8.06 0.00 5.30 1.14 3.22 3.22 C1.14 5.30 0.00 8.06 0.00 11.00 C0.00 13.94 1.14 16.70 3.22 18.78 C5.30 20.86 8.06 22.00 11.00 22.00 C13.01 22.00 14.98 21.45 16.69 20.41 C17.10 20.17 17.23 19.64 16.98 19.23 C16.74 18.83 16.21 18.70 15.80 18.94 C14.36 19.82 12.70 20.28 11.00 20.28 C5.88 20.28 1.72 16.12 1.72 11.00 C1.72 5.88 5.88 1.72 11.00 1.72 C16.12 1.72 20.28 5.88 20.28 11.00 C20.28 12.83 19.74 14.61 18.71 16.15 C18.44 16.55 18.55 17.08 18.94 17.34 C19.34 17.61 19.87 17.50 20.14 17.11 C21.36 15.28 22.00 13.17 22.00 11.00 C22.00 8.06 20.86 5.30 18.78 3.22 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 1.72 9.37" style={styles.path39}>
              <Path
                strokeWidth={0}
                fill="rgba(255,163,123,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M0.86 0.00 C0.38 0.00 0.00 0.38 0.00 0.86 L0.00 8.51 C0.00 8.98 0.38 9.37 0.86 9.37 C1.33 9.37 1.72 8.98 1.72 8.51 L1.72 0.86 C1.72 0.38 1.33 0.00 0.86 0.00 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle37}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  help: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  oval23: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 5,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path38: {
    position: "absolute",
    height: 22,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path39: {
    position: "absolute",
    height: 9,
    width: 2,
    top: 8,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval23Stack: {
    width: 22,
    height: 22
  },
  rectangle37: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  helpStack: {
    width: 24,
    height: 24
  }
});

export default IconsHelp;
