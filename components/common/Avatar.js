import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Avatar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 100 100" style={styles.oval10}>
        <Path
          strokeWidth={0}
          fill="rgba(116,127,158,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M50.00 100.00 C77.61 100.00 100.00 77.61 100.00 50.00 C100.00 22.39 77.61 0.00 50.00 0.00 C22.39 0.00 0.00 22.39 0.00 50.00 C0.00 77.61 22.39 100.00 50.00 100.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oval10: {
    height: 100,
    width: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
});

export default Avatar;
