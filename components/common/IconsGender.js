import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsGender(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.genderStack}>
        <View style={styles.gender}>
          <Svg viewBox="0 0 19.62 22.98" style={styles.path21}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M19.62 0.94 L19.62 7.04 C19.62 7.04 19.20 7.98 18.68 7.98 C18.42 7.98 18.19 7.87 18.02 7.70 C17.85 7.53 17.74 7.04 17.74 7.04 L17.74 3.21 L14.47 6.48 C14.47 6.48 15.63 8.52 15.63 9.76 C15.63 12.64 13.30 14.97 10.42 14.97 C9.47 14.97 7.80 14.26 7.80 14.26 L7.74 14.32 L6.15 14.89 L6.15 18.48 L8.26 18.48 C8.26 18.48 9.19 18.90 9.19 19.42 C9.19 19.94 8.26 20.36 8.26 20.36 L6.15 20.36 L6.15 22.04 C6.15 22.04 5.73 22.98 5.21 22.98 C4.69 22.98 4.27 22.04 4.27 22.04 L4.27 20.36 L2.17 20.36 C2.17 20.36 1.23 19.94 1.23 19.42 C1.23 18.90 2.17 18.48 2.17 18.48 L4.27 18.48 L4.27 14.89 C4.27 14.89 0.00 12.32 0.00 9.76 C0.00 6.89 2.33 4.55 5.21 4.55 C6.17 4.55 7.84 5.27 7.84 5.27 C7.84 5.27 9.52 4.55 10.42 4.55 C11.37 4.55 13.03 5.26 13.03 5.26 L16.42 1.88 L12.58 1.88 C12.58 1.88 11.64 1.46 11.64 0.94 C11.64 0.42 12.58 0.00 12.58 0.00 L18.68 0.00 L19.62 0.94 Z M5.21 9.76 C5.21 8.65 5.62 7.49 6.33 6.62 C5.15 6.20 3.79 6.46 2.85 7.40 C1.54 8.70 1.57 10.80 2.85 12.13 C3.77 13.09 6.30 12.95 6.30 12.95 L6.30 12.95 C6.30 12.95 5.21 10.96 5.21 9.76 Z M7.79 7.64 C6.89 8.82 6.85 10.58 7.75 11.77 C7.77 11.80 7.80 11.83 7.82 11.85 C8.82 10.62 8.78 8.84 7.79 7.64 Z M12.79 7.40 C11.90 6.52 10.48 6.23 9.34 6.59 C10.01 7.47 10.42 8.57 10.42 9.76 C10.42 10.90 10.04 12.10 9.35 12.93 C9.38 12.94 9.41 12.95 9.43 12.96 C10.58 13.31 11.88 13.03 12.79 12.13 C14.09 10.83 14.09 8.70 12.79 7.40 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle12}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gender: {
    position: "absolute",
    top: 0,
    left: 2,
    height: 23,
    width: 20
  },
  path21: {
    height: 23,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle12: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  genderStack: {
    width: 24,
    height: 24
  }
});

export default IconsGender;
