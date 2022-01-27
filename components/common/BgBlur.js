import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function BgBlur(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.rectangle75}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 100,
    width: 100
  },
  rectangle75: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(0,0,0,0.48)"
  }
});

export default BgBlur;
