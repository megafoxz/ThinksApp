import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsTime from "./IconsTime";
import IconsStar from "./IconsStar";

function Card5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle53Stack}>
        <View style={styles.rectangle53}>
          <View style={styles.rectangle55Row}>
            <View style={styles.rectangle55}></View>
            <View style={styles.jessicaJung1StackColumn}>
              <View style={styles.jessicaJung1Stack}>
                <Text style={styles.jessicaJung1}>Jessica Jung</Text>
                <View style={styles.time1}>
                  <View style={styles.rectangle54}>
                    <View style={styles.iconsTime1Row}>
                      <IconsTime style={styles.iconsTime1}></IconsTime>
                      <Text style={styles.style4}>12:35</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rating2}>
                <View style={styles.iconsStar2Row}>
                  <IconsStar style={styles.iconsStar2}></IconsStar>
                  <Text style={styles.style5}>4.5 (834)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.howWouldYouLikeU1}>
          How would you like us to advise about your health?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle53: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 110,
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
  rectangle55: {
    height: 87,
    width: 87,
    borderRadius: 10,
    backgroundColor: "rgba(116,127,158,1)"
  },
  jessicaJung1: {
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
  time1: {
    position: "absolute",
    top: 0,
    left: 137,
    height: 20,
    width: 71
  },
  rectangle54: {
    height: 20,
    width: 71,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row"
  },
  iconsTime1: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 3
  },
  style4: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(121,172,255,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsTime1Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 1
  },
  jessicaJung1Stack: {
    width: 208,
    height: 24
  },
  rating2: {
    height: 18,
    width: 70,
    flexDirection: "row",
    marginTop: 3
  },
  iconsStar2: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 1
  },
  style5: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(176,179,199,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsStar2Row: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  jessicaJung1StackColumn: {
    width: 208,
    marginLeft: 12,
    marginBottom: 42
  },
  rectangle55Row: {
    height: 87,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 12
  },
  howWouldYouLikeU1: {
    position: "absolute",
    top: 58,
    left: 107,
    height: 40,
    width: 243,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14
  },
  rectangle53Stack: {
    width: 350,
    height: 110
  }
});

export default Card5;
