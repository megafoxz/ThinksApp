import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icons1 from "./Icons1";

function Card8(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardHealthMonitoring}>
        <View style={styles.rectangle99Stack}>
          <View style={styles.rectangle99}>
            <Text style={styles.generalCheckUp1}>General Check-up</Text>
            <Text style={styles.generalCheckUp2}>General Check-up</Text>
          </View>
          <Icons1 style={styles.icons1}></Icons1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardHealthMonitoring: {
    height: 116,
    width: 156
  },
  rectangle99: {
    position: "absolute",
    top: 16,
    left: 0,
    height: 100,
    width: 156,
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
  generalCheckUp1: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(38,44,61,1)",
    fontSize: 14,
    marginTop: 36,
    marginLeft: 16
  },
  generalCheckUp2: {
    height: 18,
    width: 140,
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 6,
    marginLeft: 16
  },
  icons1: {
    position: "absolute",
    top: 0,
    left: 16,
    height: 44,
    width: 44,
    backgroundColor: "transparent"
  },
  rectangle99Stack: {
    width: 156,
    height: 116
  }
});

export default Card8;
