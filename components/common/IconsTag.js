import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsTag(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tagStack}>
        <View style={styles.tag}>
          <Svg viewBox="0 0 19.99 20" style={styles.path23}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M19.99 2.15 L19.99 2.19 L16.89 7.08 L17.26 10.70 C17.26 10.70 17.02 12.56 16.36 13.22 C16.35 13.22 16.35 13.23 16.35 13.23 L13.35 16.18 C13.35 16.18 12.54 16.47 12.24 16.16 C11.94 15.86 12.25 15.06 12.25 15.06 L15.25 12.11 L15.70 10.85 L15.38 7.72 C15.38 7.72 12.64 8.27 12.57 8.28 C12.56 8.28 12.54 8.28 12.53 8.28 C12.12 8.28 11.77 7.95 11.75 7.54 C11.73 7.11 12.06 6.74 12.49 6.72 C12.52 6.71 15.22 6.12 15.22 6.12 L15.10 4.93 L13.17 4.73 L13.13 4.73 L9.16 4.33 L7.89 4.78 L2.02 10.63 L2.02 12.84 L7.15 17.97 C7.15 17.97 8.75 18.60 9.35 17.99 C9.66 17.69 10.15 17.69 10.46 17.99 C10.76 18.30 10.76 18.79 10.46 19.10 C9.86 19.70 9.06 20.00 8.27 20.00 C7.46 20.00 6.04 19.07 6.04 19.07 L0.91 13.94 L0.91 9.53 L6.79 3.67 L9.31 2.77 L12.73 3.12 C12.73 3.12 14.31 0.97 15.66 0.44 C16.80 0.00 17.80 -0.00 17.85 0.00 C19.03 0.00 19.99 2.15 19.99 2.15 Z M18.43 2.19 L18.43 2.15 C18.43 2.15 18.16 1.56 17.84 1.56 C17.83 1.56 17.05 1.57 16.18 1.92 C15.42 2.22 14.42 3.29 14.42 3.29 L15.89 3.44 L16.59 4.14 L16.71 5.36 L18.43 2.19 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle17}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tag: {
    position: "absolute",
    top: 2,
    left: 2,
    height: 20,
    width: 20
  },
  path23: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle17: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  tagStack: {
    width: 24,
    height: 24
  }
});

export default IconsTag;
