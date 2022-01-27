import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsBell2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 18 20" style={styles.path}>
        <Path
          strokeWidth={0}
          fill="rgba(255,163,123,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L0.00 0.00 M11.31 18.26 C11.00 19.30 10.06 20.00 9.00 20.00 C7.94 20.00 7.00 19.30 6.69 18.26 C7.41 18.31 8.18 18.34 9.00 18.34 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  path: {
    height: 20,
    width: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 3
  }
});

export default IconsBell2;
