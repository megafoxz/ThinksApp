import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import ButtonsPrimaryDefault from "../../components/common/ButtonsPrimaryDefault";
import Iluss4 from "../../components/common/Iluss4";
import BarsStatusBarIPhoneLight from "../../components/common/BarsStatusBarIPhoneLight";
import BarsHomeIndicatorIPhoneLightPortrait from "../../components/common/BarsHomeIndicatorIPhoneLightPortrait";
import TabBarAppointmentSchedule from "../../components/common/TabBarAppointmentSchedule";
import NavigationBackBlack from "../../components/common/NavigationBackBlack";
import ScalableText from "react-native-text";
//Constant
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";
import { SIZES, COLORS, FONTS, images } from "../../constants";

function Schedule({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScalableText
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          position: "relative",
          top: 10,
          width: "100%",
          textAlign: "center",
        }}
      >
        Lịch hẹn của tôi
      </ScalableText>

      {/* <TouchableOpacity
        style={{
          position: "absolute",
          width: 30,
          marginLeft: "5%",
          height: 40,
          top: 3,
          right: 10,
          padding: 10,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: "rgba(255,246,242,1)",
        }}
        onPress={() => navigation.goBack()}
      >
        <Fontisto
          name="calendar"
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
          size={SIZES.width / 19}
          color={COLORS.orange}
        />
      </TouchableOpacity> */}
      <View style={styles.rectangle}>
        <Image
          source={images.nullSchedule}
          resizeMode="contain"
          style={{
            width: "100%",
            height: 200,
            top: 0,
            marginTop: -120,
          }}
        />
        <ScalableText style={styles.youDoNotHaveAnA}>
          Bạn chưa có cuộc hẹn nào!
        </ScalableText>
        <ScalableText style={styles.bookAHealthCareS}>
          Đặt hẹn ngay cho bạn hoặc người thân của bạn!
        </ScalableText>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            bottom: 10,
            width: "100%",
            marginTop: "15%",
            height: 44,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: COLORS.orange,
            elevation: 3,
          }}
          onPress={() => navigation.navigate("ListHotline")}
        >
          <ScalableText
            style={{
              color: COLORS.white,
              textAlign: "center",
              ...FONTS.h4,
            }}
          >
            Đặt lịch hẹn
          </ScalableText>
        </TouchableOpacity>
      </View>

      {/* <Iluss4 style={styles.iluss4}></Iluss4> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  cardSchedule: {
    height: 367,
    width: 327,
    marginTop: 160,
    marginLeft: 24,
  },
  rectangle: {
    position: "relative",
    top: SIZES.height / 5,
    left: 0,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 3,
  },
  youDoNotHaveAnA: {
    width: "90%",
    backgroundColor: "transparent",
    lineHeight: 27,
    textAlign: "center",
    color: "rgba(38,44,61,1)",
    fontSize: 18,
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: "bold",
  },
  bookAHealthCareS: {
    width: "90%",
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(116,127,158,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: "5%",
    marginRight: "5%",
  },
  buttonsPrimaryDefault: {
    position: "absolute",
    top: 323,
    left: 16,
    height: 44,
    width: 295,
    backgroundColor: "transparent",
  },
  iluss4: {
    position: "absolute",
    top: 0,
    left: 39,
    height: 172,
    width: 250,
    backgroundColor: "transparent",
  },
  rectangleStack: {
    width: 327,
    height: 367,
  },
  barsStatusBarIPhoneLight: {
    height: 44,
    width: 375,
    backgroundColor: "transparent",
    marginTop: -527,
  },
  barsHomeIndicatorIPhoneLightPortrait: {
    position: "absolute",
    top: 62,
    left: 0,
    height: 34,
    width: 375,
    backgroundColor: "transparent",
  },
  tabBarAppointmentSchedule: {
    position: "absolute",
    top: 0,
    left: 24,
    height: 72,
    width: 327,
    backgroundColor: "transparent",
  },
  barsHomeIndicatorIPhoneLightPortraitStack: {
    width: 375,
    height: 96,
    marginTop: 672,
  },
  navigationBackBlack: {
    height: 40,
    width: 375,
    backgroundColor: "transparent",
    marginTop: -756,
  },
});

export default Schedule;
