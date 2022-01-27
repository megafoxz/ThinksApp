import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsMenu(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.menuStack}>
        <View style={styles.menu}>
          <Svg viewBox="0 0 6 6" style={styles.path128}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.00 3.00 C0.00 1.35 1.35 0.00 3.00 0.00 C4.65 0.00 6.00 1.35 6.00 3.00 C6.00 4.65 4.65 6.00 3.00 6.00 C1.35 6.00 0.00 4.65 0.00 3.00 Z M1.00 3.00 C1.00 4.10 1.90 5.00 3.00 5.00 C4.10 5.00 5.00 4.10 5.00 3.00 C5.00 1.90 4.10 1.00 3.00 1.00 C1.90 1.00 1.00 1.90 1.00 3.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 6 6" style={styles.path126}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M6.00 3.00 C6.00 4.65 4.65 6.00 3.00 6.00 C1.35 6.00 0.00 4.65 0.00 3.00 C0.00 1.35 1.35 0.00 3.00 0.00 C4.65 0.00 6.00 1.35 6.00 3.00 Z M5.00 3.00 C5.00 1.90 4.10 1.00 3.00 1.00 C1.90 1.00 1.00 1.90 1.00 3.00 C1.00 4.10 1.90 5.00 3.00 5.00 C4.10 5.00 5.00 4.10 5.00 3.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 6 6" style={styles.path127}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M6.00 3.00 C6.00 4.65 4.65 6.00 3.00 6.00 C1.35 6.00 0.00 4.65 0.00 3.00 C0.00 1.35 1.35 0.00 3.00 0.00 C4.65 0.00 6.00 1.35 6.00 3.00 Z M5.00 3.00 C5.00 1.90 4.10 1.00 3.00 1.00 C1.90 1.00 1.00 1.90 1.00 3.00 C1.00 4.10 1.90 5.00 3.00 5.00 C4.10 5.00 5.00 4.10 5.00 3.00 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle94}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 9,
    height: 24,
    width: 6
  },
  path128: {
    height: 6,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path126: {
    height: 6,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3
  },
  path127: {
    height: 6,
    width: 6,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3
  },
  rectangle94: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  menuStack: {
    width: 24,
    height: 24
  }
});

export default IconsMenu;
