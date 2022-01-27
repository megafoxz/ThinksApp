import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ChooseTime(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle77}>
        <Text style={styles.am}>06:00 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle77: {
    height: 36,
    width: 101,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)"
  },
  am: {
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 8,
    marginLeft: 20
  }
});

export default ChooseTime;
