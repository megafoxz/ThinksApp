import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsPay(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.payStack}>
        <View style={styles.pay}>
          <Svg viewBox="0 0 22 16.16" style={styles.path33}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M20.28 8.43 L20.28 6.28 L1.72 6.28 L1.72 12.72 L3.44 14.44 L18.56 14.44 C18.56 14.44 20.28 13.67 20.28 12.72 C20.28 12.24 20.67 11.86 21.14 11.86 C21.62 11.86 22.00 12.24 22.00 12.72 C22.00 14.61 18.56 16.16 18.56 16.16 L3.44 16.16 L0.00 12.72 L0.00 3.44 L3.44 0.00 L18.56 0.00 L22.00 3.44 L22.00 8.43 C22.00 8.43 21.62 9.29 21.14 9.29 C20.67 9.29 20.28 8.43 20.28 8.43 Z M20.28 4.56 L20.28 3.44 L18.56 1.72 L3.44 1.72 L1.72 3.44 L1.72 4.56 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle34}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pay: {
    position: "absolute",
    top: 3,
    left: 1,
    height: 16,
    width: 22
  },
  path33: {
    height: 16,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle34: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  payStack: {
    width: 24,
    height: 24
  }
});

export default IconsPay;
