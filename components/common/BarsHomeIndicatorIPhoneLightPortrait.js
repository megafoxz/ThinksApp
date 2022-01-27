import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function BarsHomeIndicatorIPhoneLightPortrait(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.homeIndicatorFiller}></View>
        <View style={styles.homeIndicator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    height: 5,
    width: 134,
    marginTop: 21,
    marginLeft: 121
  },
  homeIndicatorFiller: {
    flex: 1
  },
  homeIndicator: {
    height: 5,
    width: 134,
    borderRadius: 100,
    backgroundColor: "rgba(0,0,0,1)"
  }
});

export default BarsHomeIndicatorIPhoneLightPortrait;
