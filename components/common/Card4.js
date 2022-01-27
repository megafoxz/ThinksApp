import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsTime from "./IconsTime";

function Card4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle39}>
        <View style={styles.rectangle40Row}>
          <View style={styles.rectangle40}></View>
          <View style={styles.jessicaJungStackColumn}>
            <View style={styles.jessicaJungStack}>
              <Text style={styles.jessicaJung}>Jessica Jung</Text>
              <View style={styles.rectangle41}>
                <View style={styles.iconsTimeRow}>
                  <IconsTime style={styles.iconsTime}></IconsTime>
                  <Text style={styles.style3}>12:35</Text>
                </View>
              </View>
            </View>
            <Text style={styles.howWouldYouLikeU}>
              How would you like us to advise about your health?
            </Text>
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
  rectangle39: {
    height: 92,
    width: 327,
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
  rectangle40: {
    height: 76,
    width: 76,
    borderRadius: 10,
    backgroundColor: "rgba(116,127,158,1)"
  },
  jessicaJung: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 175,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  rectangle41: {
    position: "absolute",
    top: 2,
    left: 144,
    height: 20,
    width: 71,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row"
  },
  iconsTime: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 3
  },
  style3: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(121,172,255,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsTimeRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 1
  },
  jessicaJungStack: {
    width: 215,
    height: 24
  },
  howWouldYouLikeU: {
    height: 40,
    width: 195,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14
  },
  jessicaJungStackColumn: {
    width: 215,
    marginLeft: 12,
    marginTop: 4,
    marginBottom: 8
  },
  rectangle40Row: {
    height: 76,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16
  }
});

export default Card4;
