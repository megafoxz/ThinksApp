import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsHistory(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.historyStack}>
        <View style={styles.history}>
          <Svg viewBox="0 0 22 22" style={styles.path40}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M11.86 5.93 C11.86 5.93 11.47 5.07 11.00 5.07 C10.53 5.07 10.14 5.93 10.14 5.93 L10.14 11.00 L10.39 11.61 L13.77 14.99 C13.77 14.99 14.65 15.32 14.99 14.99 C15.32 14.65 14.99 13.77 14.99 13.77 L11.86 10.64 Z M14.38 0.00 L7.62 0.00 L2.62 1.87 L2.62 0.86 C2.62 0.86 2.24 0.00 1.76 0.00 C1.29 0.00 0.90 0.86 0.90 0.86 L0.90 4.24 L1.76 5.10 L5.14 5.10 C5.14 5.10 6.00 4.71 6.00 4.24 C6.00 3.77 5.14 3.38 5.14 3.38 L3.52 3.38 L7.62 1.72 L14.38 1.72 L20.28 7.62 L20.28 14.38 L14.38 20.28 L7.62 20.28 L1.72 14.38 L1.72 11.00 C1.72 11.00 1.33 10.14 0.86 10.14 C0.38 10.14 0.00 11.00 0.00 11.00 L0.00 14.38 L7.62 22.00 L14.38 22.00 L22.00 14.38 L22.00 7.62 L14.38 0.00 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle38}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  history: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path40: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle38: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  historyStack: {
    width: 24,
    height: 24
  }
});

export default IconsHistory;
