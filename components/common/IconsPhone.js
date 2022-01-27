import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsPhone(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.phoneStack}>
        <View style={styles.phone}>
          <View style={styles.path36Stack}>
            <Svg viewBox="0 0 15.21 22" style={styles.path36}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M14.35 15.13 C14.83 15.13 15.21 14.75 15.21 14.27 L15.21 3.44 C15.21 1.54 13.67 0.00 11.77 0.00 L3.44 0.00 C1.54 0.00 0.00 1.54 0.00 3.44 L0.00 18.56 C0.00 20.46 1.54 22.00 3.44 22.00 L11.77 22.00 C13.67 22.00 15.21 20.46 15.21 18.56 C15.21 18.09 14.83 17.70 14.35 17.70 C13.88 17.70 13.49 18.09 13.49 18.56 C13.49 19.51 12.72 20.28 11.77 20.28 L3.44 20.28 C2.49 20.28 1.72 19.51 1.72 18.56 L1.72 3.44 C1.72 2.49 2.49 1.72 3.44 1.72 L11.77 1.72 C12.72 1.72 13.49 2.49 13.49 3.44 L13.49 14.27 C13.49 14.75 13.88 15.13 14.35 15.13 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 1.72 1.72" style={styles.oval22}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M0.86 1.72 C1.33 1.72 1.72 1.33 1.72 0.86 C1.72 0.38 1.33 0.00 0.86 0.00 C0.38 0.00 0.00 0.38 0.00 0.86 C0.00 1.33 0.38 1.72 0.86 1.72 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 3.44 1.72" style={styles.path37}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M3.44 0.86 C3.44 0.38 3.05 0.00 2.58 0.00 L0.86 0.00 C0.38 0.00 0.00 0.38 0.00 0.86 C0.00 1.33 0.38 1.72 0.86 1.72 L2.58 1.72 C3.05 1.72 3.44 1.33 3.44 0.86 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle36}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  phone: {
    position: "absolute",
    top: 1,
    left: 4,
    height: 22,
    width: 15
  },
  path36: {
    position: "absolute",
    height: 22,
    width: 15,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval22: {
    position: "absolute",
    height: 2,
    width: 2,
    top: 17,
    left: 7,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path37: {
    position: "absolute",
    height: 2,
    width: 3,
    top: 3,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path36Stack: {
    width: 15,
    height: 22
  },
  rectangle36: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  phoneStack: {
    width: 24,
    height: 24
  }
});

export default IconsPhone;
