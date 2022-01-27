import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsOrionSearchFind from "./IconsOrionSearchFind";

function TextfieldSearchFilled(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle83}>
        <View style={styles.search2Row}>
          <Text style={styles.search2}>Search</Text>
          <IconsOrionSearchFind
            style={styles.iconsOrionSearchFind2}
          ></IconsOrionSearchFind>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle83: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(248,248,248,1)",
    flexDirection: "row"
  },
  search2: {
    height: 22,
    width: 118,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  iconsOrionSearchFind2: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginLeft: 157,
    marginTop: 1
  },
  search2Row: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 11
  }
});

export default TextfieldSearchFilled;
