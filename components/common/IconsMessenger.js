import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsMessenger(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.messengerStack}>
        <View style={styles.messenger}>
          <Svg viewBox="0 0 22 22" style={styles.path125}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M4.29 21.74 C3.82 21.44 3.51 20.38 3.51 20.38 L3.46 18.60 C3.46 18.60 0.00 13.79 0.00 10.70 C0.00 7.74 1.13 5.02 3.19 3.04 C5.23 1.08 8.00 0.00 11.00 0.00 C14.00 0.00 16.77 1.08 18.81 3.04 C20.87 5.02 22.00 7.74 22.00 10.70 C22.00 12.79 21.43 14.80 20.34 16.49 C20.08 16.89 19.55 17.01 19.15 16.75 C18.75 16.49 18.64 15.96 18.89 15.56 C19.80 14.15 20.28 12.46 20.28 10.70 C20.28 5.58 16.29 1.72 11.00 1.72 C5.71 1.72 1.72 5.58 1.72 10.70 C1.72 13.30 2.75 15.66 4.62 17.33 C4.96 17.64 5.16 18.06 5.18 18.52 C5.18 18.52 5.18 18.52 5.18 18.52 L5.23 20.26 L7.18 19.40 C7.18 19.40 7.92 19.21 8.29 19.31 C9.16 19.55 10.07 19.67 11.00 19.67 C12.92 19.67 14.73 19.16 16.25 18.19 C16.65 17.93 17.18 18.05 17.44 18.45 C17.69 18.85 17.58 19.38 17.18 19.64 C15.38 20.79 13.25 21.39 11.00 21.39 C9.92 21.39 7.85 20.98 7.85 20.98 L5.86 21.86 L5.18 22.00 C5.18 22.00 4.56 21.91 4.29 21.74 Z M4.89 13.57 L7.88 8.83 L10.09 8.42 L12.46 10.23 L13.20 10.23 L16.41 7.79 L17.11 8.43 L14.12 13.17 L11.91 13.58 L9.54 11.73 L8.80 11.73 L5.59 14.21 L4.89 13.57 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle93}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  messenger: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path125: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle93: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  messengerStack: {
    width: 24,
    height: 24
  }
});

export default IconsMessenger;
