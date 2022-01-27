import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconsMedicalHistory2 from "./IconsMedicalHistory2";

function Card1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardLookingFor}>
        <View style={styles.rectangle11}>
          <View style={styles.oval6StackStackRow}>
            <View style={styles.oval6StackStack}>
              <View style={styles.oval6Stack}>
                <Svg viewBox="0 0 20 20" style={styles.oval6}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,246,242,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M10.00 20.00 C15.52 20.00 20.00 15.52 20.00 10.00 C20.00 4.48 15.52 0.00 10.00 0.00 C4.48 0.00 0.00 4.48 0.00 10.00 C0.00 15.52 4.48 20.00 10.00 20.00 Z"
                  ></Path>
                </Svg>
                <IconsMedicalHistory2
                  style={styles.iconsMedicalHistory2}
                ></IconsMedicalHistory2>
              </View>
              <Svg viewBox="0 0 4 4" style={styles.oval8}>
                <Path
                  strokeWidth={0}
                  fill="rgba(255,246,242,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M2.00 4.00 C3.10 4.00 4.00 3.10 4.00 2.00 C4.00 0.90 3.10 0.00 2.00 0.00 C0.90 0.00 0.00 0.90 0.00 2.00 C0.00 3.10 0.90 4.00 2.00 4.00 Z"
                ></Path>
              </Svg>
              <Svg viewBox="0 0 12 12" style={styles.oval9}>
                <Path
                  strokeWidth={0}
                  fill="rgba(255,246,242,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M6.00 12.00 C9.31 12.00 12.00 9.31 12.00 6.00 C12.00 2.69 9.31 0.00 6.00 0.00 C2.69 0.00 0.00 2.69 0.00 6.00 C0.00 9.31 2.69 12.00 6.00 12.00 Z"
                ></Path>
              </Svg>
            </View>
            <Svg viewBox="0 0 4 4" style={styles.oval7}>
              <Path
                strokeWidth={0}
                fill="rgba(255,246,242,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M2.00 4.00 C3.10 4.00 4.00 3.10 4.00 2.00 C4.00 0.90 3.10 0.00 2.00 0.00 C0.90 0.00 0.00 0.90 0.00 2.00 C0.00 3.10 0.90 4.00 2.00 4.00 Z"
              ></Path>
            </Svg>
          </View>
          <Text style={styles.generalCheckUp}>General{"\n"}Check-up</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardLookingFor: {
    height: 136,
    width: 98
  },
  rectangle11: {
    height: 136,
    width: 98,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  oval6: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 29,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  iconsMedicalHistory2: {
    position: "absolute",
    top: 0,
    left: 7,
    height: 48,
    width: 48,
    backgroundColor: "transparent"
  },
  oval6Stack: {
    top: 2,
    left: 0,
    width: 55,
    height: 49,
    position: "absolute"
  },
  oval8: {
    position: "absolute",
    height: 4,
    width: 4,
    top: 8,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval9: {
    position: "absolute",
    height: 12,
    width: 12,
    top: 0,
    left: 41,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  oval6StackStack: {
    width: 55,
    height: 51
  },
  oval7: {
    height: 4,
    width: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 25
  },
  oval6StackStackRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 18,
    marginRight: 21
  },
  generalCheckUp: {
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(38,44,61,1)",
    fontSize: 14,
    marginTop: 12,
    marginLeft: 18
  }
});

export default Card1;
