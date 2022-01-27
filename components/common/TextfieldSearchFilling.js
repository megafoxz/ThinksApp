import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconsOrionSearchFind from "./IconsOrionSearchFind";

function TextfieldSearchFilling(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle82}>
        <View style={styles.search1StackRow}>
          <View style={styles.search1Stack}>
            <Text style={styles.search1}>Search</Text>
            <Svg viewBox="-0.5 -0.5 3 22" style={styles.line22}>
              <Path
                strokeWidth={1}
                fill="transparent"
                stroke="rgba(255,163,123,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M0.50 0.00 L0.50 20.00 "
              ></Path>
            </Svg>
          </View>
          <IconsOrionSearchFind
            style={styles.iconsOrionSearchFind1}
          ></IconsOrionSearchFind>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle82: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(248,248,248,1)",
    flexDirection: "row"
  },
  search1: {
    position: "absolute",
    top: 0,
    left: 2,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(176,179,199,1)",
    fontSize: 16
  },
  line22: {
    position: "absolute",
    height: 22,
    width: 3,
    top: 1,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  search1Stack: {
    width: 49,
    height: 24
  },
  iconsOrionSearchFind1: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginLeft: 227,
    marginTop: 1
  },
  search1StackRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 15,
    marginTop: 11
  }
});

export default TextfieldSearchFilling;
