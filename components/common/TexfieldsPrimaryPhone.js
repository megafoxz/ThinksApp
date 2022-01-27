import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsGb from "./IconsGb";
import Svg, { Path } from "react-native-svg";

function TexfieldsPrimaryPhone(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle71}>
        <View style={styles.iconsGbRow}>
          <IconsGb style={styles.iconsGb}></IconsGb>
          <Text style={styles.style6}>+1</Text>
          <Svg viewBox="-0.5 -0.5 3 26" style={styles.line2}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(176,179,199,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.50 0.00 L0.50 24.00 "
            ></Path>
          </Svg>
          <Text style={styles.emailOrPhoneNumbe1}>Email or Phone number</Text>
        </View>
      </View>
      <Text style={styles.emailOrPhoneNumbe}>Email or Phone number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle71: {
    height: 44,
    width: 295,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: 30
  },
  iconsGb: {
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  style6: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(255,163,123,1)",
    fontSize: 16,
    marginLeft: 8
  },
  line2: {
    height: 26,
    width: 3,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 5
  },
  emailOrPhoneNumbe1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(176,179,199,1)",
    fontSize: 16,
    marginLeft: 6
  },
  iconsGbRow: {
    height: 26,
    flexDirection: "row",
    flex: 1,
    marginRight: 48,
    marginLeft: 16,
    marginTop: 10
  },
  emailOrPhoneNumbe: {
    backgroundColor: "transparent",
    lineHeight: 22,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: -74
  }
});

export default TexfieldsPrimaryPhone;
