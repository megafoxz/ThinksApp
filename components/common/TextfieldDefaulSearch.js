import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsOrionSearchFind from "./IconsOrionSearchFind";

function TextfieldDefaulSearch(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle81}>
        <View style={styles.searchRow}>
          <Text style={styles.search}>Search</Text>
          <IconsOrionSearchFind
            style={styles.iconsOrionSearchFind}
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
  rectangle81: {
    height: 44,
    width: 327,
    borderRadius: 16,
    backgroundColor: "rgba(248,248,248,1)",
    flexDirection: "row"
  },
  search: {
    height: 22,
    width: 118,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(176,179,199,1)",
    fontSize: 16
  },
  iconsOrionSearchFind: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    marginLeft: 157,
    marginTop: 1
  },
  searchRow: {
    height: 22,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 11
  }
});

export default TextfieldDefaulSearch;
