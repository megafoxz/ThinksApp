import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Divider1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="-0.5 -0.5 302 3" style={styles.line}>
        <Path
          strokeWidth={1}
          fill="transparent"
          stroke="rgba(231,229,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M0.00 0.50 L300.00 0.50 "
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  line: {
    height: 3,
    width: 302,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: -1
  }
});

export default Divider1;
