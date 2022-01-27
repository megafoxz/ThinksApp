import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsFacebook(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.facebookStack}>
        <View style={styles.facebook}>
          <Svg viewBox="0 0 22 22" style={styles.path60}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M21.14 15.13 C21.62 15.13 22.00 14.74 22.00 14.27 L22.00 3.44 C22.00 1.54 20.46 0.00 18.56 0.00 L3.44 0.00 C1.54 0.00 0.00 1.54 0.00 3.44 L0.00 18.56 C0.00 20.46 1.54 22.00 3.44 22.00 L18.56 22.00 C20.46 22.00 22.00 20.46 22.00 18.56 C22.00 18.09 21.62 17.70 21.14 17.70 C20.67 17.70 20.28 18.09 20.28 18.56 C20.28 19.51 19.51 20.28 18.56 20.28 L14.35 20.28 L14.35 14.01 L16.34 14.01 C16.78 14.01 17.14 13.68 17.19 13.25 L17.31 12.31 C17.37 11.79 16.97 11.34 16.45 11.34 L14.35 11.34 L14.35 8.46 C14.35 7.75 14.93 7.18 15.64 7.18 L16.71 7.18 C17.19 7.18 17.57 6.79 17.57 6.32 L17.57 5.45 C17.57 5.01 17.24 4.64 16.80 4.59 C16.37 4.55 15.91 4.51 15.64 4.51 C14.64 4.51 13.63 4.93 12.88 5.67 C12.11 6.43 11.69 7.43 11.69 8.47 L11.69 11.34 L9.75 11.34 C9.28 11.34 8.89 11.73 8.89 12.20 L8.89 13.15 C8.89 13.62 9.28 14.01 9.75 14.01 L11.69 14.01 L11.69 20.28 L3.44 20.28 C2.49 20.28 1.72 19.51 1.72 18.56 L1.72 3.44 C1.72 2.49 2.49 1.72 3.44 1.72 L18.56 1.72 C19.51 1.72 20.28 2.49 20.28 3.44 L20.28 14.27 C20.28 14.74 20.67 15.13 21.14 15.13 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle62}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  facebook: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path60: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle62: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  facebookStack: {
    width: 24,
    height: 24
  }
});

export default IconsFacebook;
