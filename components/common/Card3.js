import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsStar from "./IconsStar";
import IconsPin from "./IconsPin";

function Card3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle1}>
        <View style={styles.rectangle2Row}>
          <View style={styles.rectangle2}></View>
          <View style={styles.drChikansoChimaColumn}>
            <Text style={styles.drChikansoChima}>Dr. Chikanso Chima</Text>
            <Text style={styles.angiolory}>Angiolory</Text>
            <View style={styles.ratingRow}>
              <View style={styles.rating}>
                <View style={styles.iconsStarRow}>
                  <IconsStar style={styles.iconsStar}></IconsStar>
                  <Text style={styles.style}>4.5 (834)</Text>
                </View>
              </View>
              <View style={styles.rectangle3}>
                <View style={styles.iconsPinRow}>
                  <IconsPin style={styles.iconsPin}></IconsPin>
                  <Text style={styles.km}>2 km</Text>
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
  rectangle1: {
    height: 108,
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
  rectangle2: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)"
  },
  drChikansoChima: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  angiolory: {
    height: 20,
    width: 195,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 3
  },
  rating: {
    height: 18,
    width: 70,
    flexDirection: "row",
    marginTop: 1
  },
  iconsStar: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 1
  },
  style: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsStarRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5
  },
  rectangle3: {
    height: 20,
    width: 67,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row",
    marginLeft: 58
  },
  iconsPin: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 3
  },
  km: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(109,165,255,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsPinRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 12,
    marginTop: 1
  },
  ratingRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 12
  },
  drChikansoChimaColumn: {
    width: 195,
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6
  },
  rectangle2Row: {
    height: 92,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16
  }
});

export default Card3;
