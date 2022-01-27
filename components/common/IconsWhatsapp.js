import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsWhatsapp(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.whatsappStack}>
        <View style={styles.whatsapp}>
          <Svg viewBox="0 0 22 21.83" style={styles.path124}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M11.00 21.83 L6.05 20.65 L1.35 21.72 C1.35 21.72 0.76 21.70 0.56 21.49 C0.35 21.29 0.32 20.70 0.32 20.70 L1.34 16.07 C1.34 16.07 0.00 12.68 0.00 10.93 C0.00 10.92 0.00 10.91 0.00 10.91 C0.00 8.00 1.15 5.26 3.24 3.20 C5.32 1.13 8.08 0.00 11.00 0.00 C13.93 0.00 16.68 1.14 18.75 3.20 C20.85 5.29 22.00 8.03 22.00 10.92 C22.00 13.10 21.34 15.21 20.11 17.02 C19.84 17.41 19.30 17.51 18.91 17.24 C18.52 16.97 18.42 16.44 18.69 16.05 C19.73 14.53 20.28 12.75 20.28 10.92 C20.28 8.49 19.31 6.18 17.54 4.42 C15.79 2.68 13.47 1.72 11.00 1.72 C5.89 1.72 1.73 5.83 1.72 10.89 C1.72 10.90 1.72 10.90 1.72 10.91 C1.72 12.48 2.16 14.06 2.99 15.50 C3.10 15.69 3.09 16.12 3.09 16.12 L2.29 19.74 L5.98 18.91 C5.98 18.91 6.40 18.89 6.58 18.99 C7.93 19.72 11.00 20.11 11.00 20.11 L11.00 20.11 C11.00 20.11 14.32 19.65 15.76 18.80 C16.17 18.55 16.69 18.69 16.94 19.09 C17.18 19.50 17.05 20.03 16.64 20.27 C14.94 21.29 11.00 21.83 11.00 21.83 Z M8.57 6.54 C8.57 6.54 9.28 8.28 9.34 8.40 C9.41 8.53 9.45 8.67 9.36 8.84 C9.28 9.01 9.24 9.11 9.12 9.26 C8.99 9.41 8.84 9.56 8.73 9.67 C8.60 9.80 8.47 9.93 8.62 10.18 C8.76 10.43 9.28 11.28 10.03 11.95 C10.99 12.80 11.79 13.07 12.04 13.20 C12.30 13.32 12.44 13.30 12.59 13.13 C12.74 12.97 13.23 12.39 13.40 12.14 C13.57 11.88 13.73 11.93 13.96 12.01 C14.20 12.09 15.43 12.71 15.68 12.84 C15.93 12.96 16.10 13.02 16.16 13.13 C16.23 13.23 16.23 13.74 16.02 14.32 C15.81 14.91 14.78 15.47 14.32 15.51 C13.86 15.55 13.42 15.72 11.30 14.89 C8.74 13.88 7.13 11.27 7.00 11.10 C6.87 10.93 5.97 9.74 5.97 8.51 C5.97 7.27 6.62 6.67 6.85 6.42 C7.08 6.16 7.52 6.10 7.52 6.10 L8.01 6.10 L8.57 6.54 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle92}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  whatsapp: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path124: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle92: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  whatsappStack: {
    width: 24,
    height: 24
  }
});

export default IconsWhatsapp;
