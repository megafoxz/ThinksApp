import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function CheckBoxAction(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle74}>
        <Svg viewBox="-0.5 -0.5 3 26" style={styles.line21}>
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(255,163,123,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M0.50 0.00 L0.50 24.00 "
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
  rectangle74: {
    height: 44,
    width: 44,
    borderWidth: 1,
    borderColor: "rgba(151,151,151,1)",
    borderRadius: 10,
    backgroundColor: "transparent"
  },
  line21: {
    height: 26,
    width: 3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 10,
    marginLeft: 22
  }
});

export default CheckBoxAction;
