import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsEdit(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.editStack}>
        <View style={styles.edit}>
          <Svg viewBox="0 0 22 22" style={styles.path110}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M22.00 4.40 C22.00 5.58 20.71 7.51 20.71 7.51 L11.43 16.77 C11.43 16.77 10.55 17.10 10.21 16.77 C9.88 16.43 10.22 15.55 10.22 15.55 L18.02 7.77 L14.23 3.98 L4.03 14.17 L8.41 18.56 C8.41 18.56 8.71 19.09 8.63 19.39 C8.56 19.68 8.04 20.00 8.04 20.00 L1.09 21.97 C1.09 21.97 0.94 22.00 0.86 22.00 C0.64 22.00 0.42 21.91 0.25 21.75 C0.03 21.53 0.03 20.91 0.03 20.91 L1.96 13.97 L2.18 13.59 L14.49 1.29 C14.49 1.29 16.42 0.00 17.60 0.00 C18.77 0.00 19.88 0.46 20.71 1.29 C21.54 2.12 22.00 3.23 22.00 4.40 Z M3.24 15.81 L2.10 19.90 L6.16 18.74 L3.24 15.81 Z M20.28 4.40 C20.28 3.69 20.00 3.01 19.50 2.50 C18.99 2.00 18.31 1.72 17.60 1.72 C16.88 1.72 15.70 2.50 15.70 2.50 L15.45 2.76 L19.24 6.55 L19.50 6.30 C19.50 6.30 20.28 5.12 20.28 4.40 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle80}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  edit: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path110: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle80: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  editStack: {
    width: 24,
    height: 24
  }
});

export default IconsEdit;
