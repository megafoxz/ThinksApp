import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsStar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.star}>
        <Svg viewBox="0 0 20 20" style={styles.path19}>
          <Path
            strokeWidth={0}
            fill="rgba(244,176,72,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M19.95 7.56 C19.82 7.14 19.46 6.83 19.03 6.80 L13.26 6.25 L10.98 0.67 C10.81 0.26 10.43 0.00 10.00 0.00 C9.57 0.00 9.19 0.26 9.02 0.67 L6.74 6.25 L0.97 6.80 C0.54 6.84 0.18 7.14 0.05 7.56 C-0.08 7.98 0.04 8.44 0.36 8.74 L4.73 12.73 L3.44 18.64 C3.35 19.08 3.51 19.53 3.85 19.79 C4.04 19.93 4.26 20.00 4.48 20.00 C4.66 20.00 4.85 19.95 5.02 19.84 L10.00 16.74 L14.98 19.84 C15.34 20.07 15.80 20.05 16.15 19.79 C16.49 19.53 16.65 19.08 16.56 18.64 L15.27 12.73 L19.64 8.74 C19.96 8.44 20.08 7.98 19.95 7.56 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  star: {
    height: 20,
    width: 20,
    marginTop: 2,
    marginLeft: 2
  },
  path19: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

export default IconsStar;
