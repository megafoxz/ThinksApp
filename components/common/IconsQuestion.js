import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsQuestion(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.questionStack}>
        <View style={styles.question}>
          <Svg viewBox="0 0 22 22" style={styles.path121}>
            <Path
              strokeWidth={0}
              fill="rgba(116,127,158,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M11.82 16.37 C11.82 15.90 11.43 15.51 10.96 15.51 C10.48 15.51 10.10 15.90 10.10 16.37 C10.10 16.85 10.48 17.23 10.96 17.23 C11.43 17.23 11.82 16.85 11.82 16.37 Z M11.82 13.36 L11.82 12.21 C11.82 12.21 14.63 10.30 14.56 8.59 C14.49 6.74 12.97 5.23 11.10 5.16 C10.10 5.12 9.15 5.48 8.44 6.17 C7.73 6.84 7.35 7.75 7.35 8.72 C7.35 9.20 7.73 9.58 8.21 9.58 C8.68 9.58 9.07 9.20 9.07 8.72 C9.07 8.22 9.27 7.75 9.63 7.41 C10.00 7.04 10.50 6.86 11.03 6.88 C12.01 6.91 12.81 7.70 12.85 8.66 C12.88 9.56 12.26 10.35 11.37 10.55 C10.62 10.71 10.10 12.12 10.10 12.12 L10.10 13.36 C10.10 13.36 10.48 14.22 10.96 14.22 C11.43 14.22 11.82 13.36 11.82 13.36 Z M16.69 20.41 C17.10 20.17 17.23 19.64 16.98 19.23 C16.74 18.83 16.21 18.70 15.80 18.94 C14.36 19.82 12.70 20.28 11.00 20.28 C5.88 20.28 1.72 16.12 1.72 11.00 C1.72 5.88 5.88 1.72 11.00 1.72 C16.12 1.72 20.28 5.88 20.28 11.00 C20.28 12.83 19.74 14.61 18.71 16.15 C18.44 16.55 18.55 17.08 18.94 17.34 C19.34 17.61 19.87 17.50 20.14 17.11 C21.36 15.28 22.00 13.17 22.00 11.00 C22.00 8.06 20.86 5.30 18.78 3.22 C16.70 1.14 13.94 0.00 11.00 0.00 C8.06 0.00 5.30 1.14 3.22 3.22 C1.14 5.30 0.00 8.06 0.00 11.00 C0.00 13.94 1.14 16.70 3.22 18.78 C5.30 20.86 8.06 22.00 11.00 22.00 C13.01 22.00 14.98 21.45 16.69 20.41 Z"
            ></Path>
          </Svg>
        </View>
        <View style={styles.rectangle85}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 22,
    width: 22
  },
  path121: {
    height: 22,
    width: 22,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle85: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  questionStack: {
    width: 24,
    height: 24
  }
});

export default IconsQuestion;
