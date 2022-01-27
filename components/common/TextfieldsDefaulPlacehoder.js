import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function TextfieldsDefaulPlacehoder(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group5}>
        <Text style={styles.firstNameLastNa}>Username</Text>
        <View style={styles.rectangle28}>
          <TextInput
            onChangeText={(text) => setValue({ ...value, userName: text })}
            value="Your username"
            style={styles.textInput}
            placeholder="Username"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  group5: {
    height: 74,
  },
  firstNameLastNa: {
    height: 22,
    backgroundColor: "transparent",
    lineHeight: 22,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
  },
  rectangle28: {
    height: 44,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    marginTop: 8,
  },
  chikanso: {
    height: 24,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(176,179,199,1)",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 16,
  },
});

export default TextfieldsDefaulPlacehoder;
