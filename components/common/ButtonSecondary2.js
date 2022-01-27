import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ButtonSecondary2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle95}>
        <Text adjustsFontSizeToFit style={styles.newProfile}>
          New profile
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle95: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(255,246,242,1)",
  },
  newProfile: {
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(255,163,123,1)",
    fontSize: 16,
    marginTop: 9,
    marginLeft: 121,
  },
});

export default ButtonSecondary2;
