import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ChooseTime2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle78}>
        <Text style={styles.am1}>06:00 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle78: {
    height: 36,
    width: 101,
    borderRadius: 10,
    backgroundColor: "rgba(109,165,255,1)"
  },
  am1: {
    backgroundColor: "transparent",
    lineHeight: 22,
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 7,
    marginLeft: 18
  }
});

export default ChooseTime2;
