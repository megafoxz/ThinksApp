import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsStar from "./IconsStar";
import IconsPin from "./IconsPin";

function Row2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle4}>
        <View style={styles.rectangle5Row}>
          <View style={styles.rectangle5}></View>
          <View style={styles.drChikansoChima1Column}>
            <Text style={styles.drChikansoChima1}>Dr. Chikanso Chima</Text>
            <Text style={styles.angiolory1}>Angiolory</Text>
            <View style={styles.rating1Row}>
              <View style={styles.rating1}>
                <View style={styles.iconsStar1Row}>
                  <IconsStar style={styles.iconsStar1}></IconsStar>
                  <Text style={styles.style1}>4.5 (834)</Text>
                </View>
              </View>
              <View style={styles.rectangle6}>
                <View style={styles.iconsPin1Row}>
                  <IconsPin style={styles.iconsPin1}></IconsPin>
                  <Text style={styles.km1}>2 km</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle4: {
    height: 108,
    width: 327,
    borderWidth: 2,
    borderColor: "rgba(255,163,123,1)",
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
  rectangle5: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)"
  },
  drChikansoChima1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  angiolory1: {
    height: 20,
    width: 195,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 3
  },
  rating1: {
    height: 18,
    width: 70,
    flexDirection: "row",
    marginTop: 1
  },
  iconsStar1: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 1
  },
  style1: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsStar1Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  rectangle6: {
    height: 20,
    width: 67,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row",
    marginLeft: 58
  },
  iconsPin1: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 3
  },
  km1: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(121,172,255,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsPin1Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 12,
    marginTop: 1
  },
  rating1Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 12
  },
  drChikansoChima1Column: {
    width: 195,
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6
  },
  rectangle5Row: {
    height: 92,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16
  }
});

export default Row2;
