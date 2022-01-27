import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsValidatingTicket(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.validatingTicketStack}>
        <View style={styles.validatingTicket}>
          <View style={styles.path26Stack}>
            <Svg viewBox="0 0 22 18.53" style={styles.path26}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M22.00 2.74 C22.00 3.48 21.71 4.17 21.19 4.69 C20.68 5.20 19.25 5.49 19.25 5.49 L18.56 5.49 L18.56 15.78 C18.56 15.78 17.33 18.53 15.81 18.53 C15.15 18.53 14.51 18.29 14.01 17.86 C13.77 17.64 13.56 17.39 13.41 17.11 C13.25 17.39 13.05 17.64 12.80 17.86 C12.30 18.29 11.66 18.53 11.00 18.53 C10.34 18.53 9.70 18.29 9.20 17.86 C8.95 17.64 8.75 17.39 8.59 17.11 C8.44 17.39 8.23 17.64 7.99 17.86 C7.49 18.29 6.85 18.53 6.19 18.53 C4.67 18.53 3.44 15.78 3.44 15.78 L3.44 5.49 L2.75 5.49 C2.75 5.49 0.00 4.26 0.00 2.74 C0.00 2.01 0.29 1.32 0.81 0.80 C1.32 0.29 2.75 0.00 2.75 0.00 L19.25 0.00 C19.25 0.00 22.00 1.23 22.00 2.74 Z M20.63 2.74 C20.63 1.99 19.25 1.37 19.25 1.37 L2.75 1.37 C2.75 1.37 2.04 1.52 1.78 1.77 C1.52 2.03 1.38 2.38 1.38 2.74 C1.38 3.50 2.75 4.12 2.75 4.12 L3.44 4.12 L3.44 3.77 C3.44 3.77 3.75 3.09 4.13 3.09 C4.50 3.09 4.81 3.77 4.81 3.77 L4.81 15.78 C4.81 15.78 5.43 17.15 6.19 17.15 C6.86 17.15 7.44 16.65 7.55 15.99 C7.63 15.47 8.07 15.10 8.59 15.10 C9.12 15.10 9.56 15.47 9.64 15.99 C9.74 16.65 10.33 17.15 11.00 17.15 C11.67 17.15 12.26 16.65 12.36 15.99 C12.44 15.47 12.88 15.10 13.41 15.10 C13.93 15.10 14.37 15.47 14.45 15.99 C14.56 16.65 15.14 17.15 15.81 17.15 C16.57 17.15 17.19 15.78 17.19 15.78 L17.19 3.77 C17.19 3.77 17.50 3.09 17.88 3.09 C18.25 3.09 18.56 3.77 18.56 3.77 L18.56 4.12 L19.25 4.12 C19.25 4.12 19.96 3.97 20.22 3.72 C20.48 3.46 20.63 3.11 20.63 2.74 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 6.18 1.54" style={styles.path27}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.49 1.54 L0.69 1.54 C0.31 1.54 0.00 1.20 0.00 0.77 C0.00 0.35 0.31 0.00 0.69 0.00 L5.49 0.00 C5.87 0.00 6.18 0.35 6.18 0.77 C6.18 1.20 5.87 1.54 5.49 1.54 Z"
              ></Path>
            </Svg>
            <Svg viewBox="0 0 6.18 1.54" style={styles.path28}>
              <Path
                strokeWidth={0}
                fill="rgba(116,127,158,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M5.49 1.54 L0.69 1.54 C0.31 1.54 0.00 1.20 0.00 0.77 C0.00 0.35 0.31 0.00 0.69 0.00 L5.49 0.00 C5.87 0.00 6.18 0.35 6.18 0.77 C6.18 1.20 5.87 1.54 5.49 1.54 Z"
              ></Path>
            </Svg>
          </View>
        </View>
        <View style={styles.rectangle27}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  validatingTicket: {
    position: "absolute",
    top: 3,
    left: 1,
    height: 19,
    width: 22
  },
  path26: {
    position: "absolute",
    height: 19,
    width: 22,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path27: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 11,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path28: {
    position: "absolute",
    height: 2,
    width: 6,
    top: 8,
    left: 8,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path26Stack: {
    width: 22,
    height: 19
  },
  rectangle27: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  validatingTicketStack: {
    width: 24,
    height: 24
  }
});

export default IconsValidatingTicket;
