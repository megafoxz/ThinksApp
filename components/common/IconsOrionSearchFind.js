import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsOrionSearchFind(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 20" style={styles.path15}>
        <Path
          strokeWidth={0}
          fill="rgba(255,163,123,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M19.68 18.04 C19.68 18.04 20.11 19.22 19.67 19.66 C19.23 20.11 18.08 19.68 18.08 19.68 L12.25 13.73 L12.27 13.71 C12.27 13.71 4.69 15.89 2.00 12.92 C-0.69 9.94 -0.66 5.35 2.06 2.41 C4.79 -0.53 9.28 -0.82 12.35 1.75 C15.41 4.32 13.70 12.17 13.70 12.17 L13.81 12.05 L19.68 18.04 L19.68 18.04 Z M7.56 13.47 C7.56 13.47 13.22 10.89 13.22 7.70 C13.22 4.51 10.69 1.93 7.56 1.93 C4.44 1.93 1.90 4.51 1.90 7.70 C1.90 10.89 7.56 13.47 7.56 13.47 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  path15: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 2
  }
});

export default IconsOrionSearchFind;
