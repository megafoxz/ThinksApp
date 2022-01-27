import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsBottom(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 8 16" style={styles.chevronRight3}>
        <Path
          strokeWidth={0}
          fill="rgba(255,163,123,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.20 8.59 L6.37 15.62 C6.64 15.93 7.27 16.20 7.72 15.80 C8.18 15.40 7.99 14.81 7.72 14.50 L2.04 8.03 L7.72 1.55 C7.99 1.24 8.18 0.62 7.72 0.19 C7.26 -0.23 6.64 0.12 6.37 0.43 L0.20 7.47 C-0.07 7.77 -0.07 8.28 0.20 8.59 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chevronRight3: {
    height: 16,
    width: 8,
    backgroundColor: "transparent",
    borderColor: "transparent",
    transform: [
      {
        rotate: "-90.00deg"
      }
    ],
    marginTop: 4,
    marginLeft: 7
  }
});

export default IconsBottom;
