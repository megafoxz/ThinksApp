import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsStayAtHome from "./IconsStayAtHome";
import IconsCalendar2 from "./IconsCalendar2";
import IconsConversation from "./IconsConversation";
import IconsAdd from "./IconsAdd";

function TabBarAppointmentSchedule(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tabBarHomeDark1}>
        <View style={styles.rectangle8}>
          <View style={styles.iconsStayAtHome1Row}>
            <IconsStayAtHome style={styles.iconsStayAtHome1}></IconsStayAtHome>
            <View style={styles.schedule}>
              <View style={styles.base1}>
                <View style={styles.iconsCalendar21Row}>
                  <IconsCalendar2
                    style={styles.iconsCalendar21}
                  ></IconsCalendar2>
                  <Text style={styles.schedule1}>Schedule</Text>
                </View>
              </View>
            </View>
            <IconsConversation
              style={styles.iconsConversation1}
            ></IconsConversation>
            <IconsAdd style={styles.iconsAdd1}></IconsAdd>
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
  tabBarHomeDark1: {
    height: 72,
    width: 327
  },
  rectangle8: {
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
  iconsStayAtHome1: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginTop: 8
  },
  schedule: {
    height: 40,
    width: 130,
    marginLeft: 31
  },
  base1: {
    height: 40,
    width: 130,
    borderRadius: 10,
    backgroundColor: "rgba(255,163,123,1)",
    flexDirection: "row"
  },
  iconsCalendar21: {
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  schedule1: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 8
  },
  iconsCalendar21Row: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 16,
    marginTop: 8
  },
  iconsConversation1: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 31,
    marginTop: 8
  },
  iconsAdd1: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 31,
    marginTop: 8
  },
  iconsStayAtHome1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16
  }
});

export default TabBarAppointmentSchedule;
