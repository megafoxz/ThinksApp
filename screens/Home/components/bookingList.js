import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SIZES, COLORS } from "../../../constants";
import IconsMedicalHistory from "../../../components/common/IconsMedicalHistory";
import { right } from "styled-system";

export default function bookingList() {
  return (
    <View>
      {/* <View style={styles.dontForgetRow}>
        <Text style={styles.dontForget}>Đừng quên lịch hẹn của bạn</Text>
        <Text style={styles.clear}>Clear</Text>
      </View>
      <View style={styles.rectangle1}>
        <View style={styles.iconsMedicalHistoryRow}>
          <IconsMedicalHistory
            style={styles.iconsMedicalHistory}
          ></IconsMedicalHistory>
          <Text style={styles.meetDrChikanso}>Meet Dr. Chikanso</Text>
          <Text style={styles.pm}>14:30 PM</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle1: {
    height: 54,
    width: "90%",
    marginTop: 5,
    marginRight: "5%",
    marginLeft: "5%",
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  iconsMedicalHistory: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
  },
  dontForget: {
    backgroundColor: "transparent",
    lineHeight: 27,
    color: COLORS.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  clear: {
    backgroundColor: "transparent",
    lineHeight: 21,
    color: "rgba(255,111,91,1)",
    fontSize: 14,
    marginTop: 3,
    position: "absolute",
    right: 0,
    fontWeight: "bold",
  },
  dontForgetRow: {
    height: 27,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 27,
    marginTop: 30,
  },
  meetDrChikanso: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16,
    marginLeft: 12,
  },
  pm: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(109,165,255,1)",
    fontSize: 12,
    marginLeft: 77,
    marginTop: 3,
  },
  iconsMedicalHistoryRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 16,
    marginTop: 15,
  },
});
