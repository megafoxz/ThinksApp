import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsStayAtHome from "./IconsStayAtHome";
import IconsCalendar2 from "./IconsCalendar2";
import IconsConversation from "./IconsConversation";
import IconsAdd from "./IconsAdd";

function TabBarChat(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tabBarHomeDark2}>
        <View style={styles.rectangle9}>
          <View style={styles.iconsStayAtHome2Row}>
            <IconsStayAtHome style={styles.iconsStayAtHome2}></IconsStayAtHome>
            <IconsCalendar2 style={styles.iconsCalendar22}></IconsCalendar2>
            <View style={styles.chat}>
              <View style={styles.base2}>
                <View style={styles.iconsConversation2Row}>
                  <IconsConversation
                    style={styles.iconsConversation2}
                  ></IconsConversation>
                  <Text style={styles.chat1}>Chat</Text>
                </View>
              </View>
            </View>
            <IconsAdd style={styles.iconsAdd2}></IconsAdd>
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
  tabBarHomeDark2: {
    height: 72,
    width: 327
  },
  rectangle9: {
    height: 72,
    width: 327,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOffset: {
      height: 4,
      width: 0
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconsStayAtHome2: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginTop: 8
  },
  iconsCalendar22: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 41,
    marginTop: 8
  },
  chat: {
    height: 40,
    width: 99,
    marginLeft: 41
  },
  base2: {
    height: 40,
    width: 99,
    borderRadius: 10,
    backgroundColor: "rgba(255,163,123,1)",
    flexDirection: "row"
  },
  iconsConversation2: {
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  chat1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 8
  },
  iconsConversation2Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 16,
    marginTop: 8
  },
  iconsAdd2: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 41,
    marginTop: 8
  },
  iconsStayAtHome2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 16,
    marginTop: 16
  }
});

export default TabBarChat;
