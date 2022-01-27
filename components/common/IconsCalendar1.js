import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsCalendar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.calendar1Stack}>
        <View style={styles.calendar1}>
          <Svg viewBox="0 0 18.83 20" style={styles.path186}>
            <Path
              strokeWidth={0}
              fill="rgba(255,163,123,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M17.07 13.48 L16.54 14.01 L14.86 14.01 L14.34 13.48 L14.34 11.80 L14.86 11.28 L16.54 11.28 L17.07 11.80 Z M16.48 11.86 L14.92 11.86 L14.92 13.42 L16.48 13.42 Z M18.54 14.31 L18.24 14.02 L18.24 5.28 L3.43 5.28 C3.43 5.28 3.14 5.15 3.14 4.99 C3.14 4.83 3.43 4.70 3.43 4.70 L18.24 4.70 L18.24 2.64 L17.37 1.77 L14.43 1.77 C14.43 1.77 14.88 2.36 15.27 2.36 C15.44 2.36 15.57 2.49 15.57 2.65 C15.57 2.82 15.44 2.95 15.27 2.95 C14.56 2.95 13.82 1.77 13.82 1.77 L10.52 1.77 C10.52 1.77 10.98 2.36 11.37 2.36 C11.53 2.36 11.66 2.49 11.66 2.65 C11.66 2.82 11.53 2.95 11.37 2.95 C10.65 2.95 9.92 1.77 9.92 1.77 L6.62 1.77 C6.62 1.77 7.07 2.36 7.46 2.36 C7.62 2.36 7.75 2.49 7.75 2.65 C7.75 2.82 7.62 2.95 7.46 2.95 C6.74 2.95 6.01 1.77 6.01 1.77 L2.71 1.77 C2.71 1.77 3.16 2.36 3.55 2.36 C3.72 2.36 3.85 2.49 3.85 2.65 C3.85 2.82 3.72 2.95 3.55 2.95 C2.84 2.95 2.10 1.77 2.10 1.77 L1.46 1.77 L0.59 2.64 L0.59 4.70 L2.07 4.70 C2.07 4.70 2.36 4.83 2.36 4.99 C2.36 5.15 2.07 5.28 2.07 5.28 L0.59 5.28 L0.59 18.54 L1.46 19.41 L17.37 19.41 L18.24 18.54 L18.24 15.38 C18.24 15.38 18.37 15.09 18.54 15.09 C18.70 15.09 18.83 15.38 18.83 15.38 L18.83 18.54 L17.37 20.00 L1.46 20.00 L0.00 18.54 L0.00 2.64 L1.46 1.18 L2.10 1.18 C2.10 1.18 2.84 0.00 3.55 0.00 C4.27 0.00 5.01 1.18 5.01 1.18 L6.01 1.18 C6.01 1.18 6.74 0.00 7.46 0.00 C8.18 0.00 8.91 1.18 8.91 1.18 L9.92 1.18 C9.92 1.18 10.65 0.00 11.37 0.00 C12.08 0.00 12.82 1.18 12.82 1.18 L13.82 1.18 C13.82 1.18 14.56 0.00 15.27 0.00 C15.99 0.00 16.73 1.18 16.73 1.18 L17.37 1.18 L18.83 2.64 L18.83 14.02 L18.54 14.31 Z M4.40 1.18 C4.40 1.18 3.94 0.59 3.55 0.59 C3.16 0.59 2.71 1.18 2.71 1.18 Z M8.31 1.18 C8.31 1.18 7.85 0.59 7.46 0.59 C7.07 0.59 6.62 1.18 6.62 1.18 Z M12.21 1.18 C12.21 1.18 11.76 0.59 11.37 0.59 C10.98 0.59 10.52 1.18 10.52 1.18 Z M16.12 1.18 C16.12 1.18 15.66 0.59 15.27 0.59 C14.88 0.59 14.43 1.18 14.43 1.18 Z M17.07 16.04 L17.07 17.71 L16.54 18.24 L14.86 18.24 L14.34 17.71 L14.34 16.04 L14.86 15.51 L16.54 15.51 L17.07 16.04 Z M16.48 16.09 L14.92 16.09 L14.92 17.66 L16.48 17.66 Z M17.07 8.66 L16.54 9.19 L14.86 9.19 L14.34 8.66 L14.34 6.98 L14.86 6.46 L16.54 6.46 L17.07 6.98 Z M16.48 7.04 L14.92 7.04 L14.92 8.60 L16.48 8.60 Z M4.49 8.66 L3.96 9.19 L2.29 9.19 L1.76 8.66 L1.76 6.98 L2.29 6.46 L3.96 6.46 L4.49 6.98 Z M3.91 7.04 L2.34 7.04 L2.34 8.60 L3.91 8.60 Z M4.49 13.48 L3.96 14.01 L2.29 14.01 L1.76 13.48 L1.76 11.80 L2.29 11.28 L3.96 11.28 L4.49 11.80 Z M3.91 11.86 L2.34 11.86 L2.34 13.42 L3.91 13.42 Z M4.49 16.04 L4.49 17.71 L3.96 18.24 L2.29 18.24 L1.76 17.71 L1.76 16.04 L2.29 15.51 L3.96 15.51 L4.49 16.04 Z M3.91 16.09 L2.34 16.09 L2.34 17.66 L3.91 17.66 Z M12.29 11.95 L12.29 12.75 L11.73 13.30 L10.37 13.30 L10.37 14.66 L9.81 15.22 L9.02 15.22 L8.46 14.66 L8.46 13.30 L7.10 13.30 L6.54 12.75 L6.54 11.95 L7.10 11.39 L8.46 11.39 L8.46 10.03 L9.02 9.48 L9.81 9.48 L10.37 10.03 L10.37 11.39 L11.73 11.39 L12.29 11.95 Z M11.70 11.98 L10.21 11.98 L9.78 11.56 L9.78 10.06 L9.05 10.06 L9.05 11.56 L8.62 11.98 L7.13 11.98 L7.13 12.72 L8.62 12.72 L9.05 13.14 L9.05 14.64 L9.78 14.64 L9.78 13.14 L10.21 12.72 L11.70 12.72 Z M12.17 15.51 L12.35 15.51 L12.88 16.04 L12.88 17.71 L12.35 18.24 L10.67 18.24 L10.14 17.71 L10.14 16.48 C10.14 16.48 9.66 16.54 9.41 16.54 C9.17 16.54 8.68 16.48 8.68 16.48 L8.68 17.71 L8.16 18.24 L6.48 18.24 L5.95 17.71 L5.95 16.04 L6.48 15.51 L6.66 15.51 C6.66 15.51 5.22 13.61 5.22 12.35 C5.22 11.09 6.66 9.19 6.66 9.19 L6.48 9.19 L5.95 8.66 L5.95 6.98 L6.48 6.46 L8.16 6.46 L8.68 6.98 L8.68 8.22 C8.68 8.22 9.17 8.15 9.41 8.15 C9.66 8.15 10.14 8.22 10.14 8.22 L10.14 6.98 L10.67 6.46 L12.35 6.46 L12.88 6.98 L12.88 8.66 L12.35 9.19 L12.17 9.19 C12.17 9.19 13.61 11.09 13.61 12.35 C13.61 13.61 12.17 15.51 12.17 15.51 Z M10.73 8.37 L11.30 8.60 L12.29 8.60 L12.29 7.04 L10.73 7.04 Z M7.52 8.60 L8.10 8.37 L8.10 7.04 L6.54 7.04 L6.54 8.60 Z M8.10 16.33 L7.52 16.09 L6.54 16.09 L6.54 17.66 L8.10 17.66 Z M11.30 16.09 L10.73 16.33 L10.73 17.66 L12.29 17.66 L12.29 16.09 Z M13.02 12.35 C13.02 10.27 11.36 8.74 9.41 8.74 C7.46 8.74 5.80 10.33 5.80 12.35 C5.80 14.37 7.46 15.96 9.41 15.96 C11.37 15.96 13.02 14.38 13.02 12.35 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle103}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar1: {
    position: "absolute",
    top: 2,
    left: 3,
    height: 20,
    width: 19
  },
  path186: {
    height: 20,
    width: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle103: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  calendar1Stack: {
    width: 24,
    height: 24
  }
});

export default IconsCalendar1;
