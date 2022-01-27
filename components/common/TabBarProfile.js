import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsStayAtHome from "./IconsStayAtHome";
import IconsCalendar2 from "./IconsCalendar2";
import IconsConversation from "./IconsConversation";
import IconsAdd from "./IconsAdd";

function TabBarProfile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tabBarHomeDark3}>
        <View style={styles.rectangle10}>
          <View style={styles.iconsStayAtHome3Row}>
            <IconsStayAtHome style={styles.iconsStayAtHome3}></IconsStayAtHome>
            <IconsCalendar2 style={styles.iconsCalendar23}></IconsCalendar2>
            <IconsConversation
              style={styles.iconsConversation3}
            ></IconsConversation>
            <View style={styles.profile}>
              <View style={styles.base3}>
                <View style={styles.iconsAdd3Row}>
                  <IconsAdd style={styles.iconsAdd3}></IconsAdd>
                  <Text adjustsFontSizeToFit style={styles.profile1}>
                    Profile
                  </Text>
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
    flex: 1,
  },
  tabBarHomeDark3: {
    height: 72,
    width: 327,
  },
  rectangle10: {
    height: 72,
    width: 327,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.12)",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
  },
  iconsStayAtHome3: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginTop: 8,
  },
  iconsCalendar23: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 37,
    marginTop: 8,
  },
  iconsConversation3: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 37,
    marginTop: 8,
  },
  profile: {
    height: 40,
    width: 111,
    marginLeft: 37,
  },
  base3: {
    height: 40,
    width: 111,
    borderRadius: 10,
    backgroundColor: "rgba(255,163,123,1)",
    flexDirection: "row",
  },
  iconsAdd3: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
  },
  profile1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 8,
  },
  iconsAdd3Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 16,
    marginTop: 8,
  },
  iconsStayAtHome3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 16,
    marginTop: 16,
  },
});

export default TabBarProfile;
