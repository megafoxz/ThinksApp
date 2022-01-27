import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsAdd(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.65 20" style={styles.shape}>
        <Path
          strokeWidth={0}
          fill="rgba(176,179,199,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shape: {
    height: 20,
    width: 21,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 2
  }
});

export default IconsAdd;
