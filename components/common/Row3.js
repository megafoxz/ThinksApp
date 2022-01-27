import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsCalendar from "./IconsCalendar";

function Row3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group9}>
        <View style={styles.rectangle86}>
          <View style={styles.rectangle87Row}>
            <View style={styles.rectangle87}></View>
            <View style={styles.chinaRecordsLowestColumn}>
              <Text style={styles.chinaRecordsLowest}>
                China Records Lowest...
              </Text>
              <Text style={styles.chinaRecordsLowest1}>
                China Records Lowest Infecti...
              </Text>
              <View style={styles.calenderRow}>
                <View style={styles.calender}>
                  <View style={styles.iconsCalendarRow}>
                    <IconsCalendar style={styles.iconsCalendar}></IconsCalendar>
                    <Text style={styles.style34}>2020/09/08</Text>
                  </View>
                </View>
                <View style={styles.rectangle88}>
                  <Text style={styles.news}>News</Text>
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
    flex: 1
  },
  group9: {
    height: 108,
    width: 327
  },
  rectangle86: {
    height: 108,
    width: 327,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangle87: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)"
  },
  chinaRecordsLowest: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginLeft: 1
  },
  chinaRecordsLowest1: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 1
  },
  calender: {
    height: 18,
    width: 91,
    flexDirection: "row",
    marginTop: 1
  },
  iconsCalendar: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 1
  },
  style34: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(176,179,199,1)",
    fontSize: 12,
    marginLeft: 8
  },
  iconsCalendarRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 6
  },
  rectangle88: {
    height: 20,
    width: 55,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    marginLeft: 50
  },
  news: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(121,172,255,1)",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 12
  },
  calenderRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 19
  },
  chinaRecordsLowestColumn: {
    width: 196,
    marginLeft: 15,
    marginBottom: 4
  },
  rectangle87Row: {
    height: 92,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16
  }
});

export default Row3;
