import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
//Constant
import { images } from "../../constants";
import * as Device from "expo-device";
import ScalableText from "react-native-text";

const TabBarHome = ({ activeName }) => {
  const [value, setValue] = useState({
    activeName: "Home",
  });
  const [osName, setOsName] = useState("");
  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        zIndex: 2,
        position: "absolute",
        flexDirection: "row",
        bottom: osName == "Android" ? 20 : 40,
        paddingRight: "5%",
        paddingLeft: "5%",
      }}
    >
      <View style={styles.tabBarHomeDark}>
        <View style={styles.rectangle7}>
          <View style={styles.baseRow}>
            <TouchableOpacity
              style={
                value.activeName == "Home"
                  ? styles.iconsActive
                  : styles.iconsInActive
              }
              onPress={() => {
                setValue({ activeName: "Home" });
                activeName("Home");
              }}
            >
              <Image
                source={
                  value.activeName == "Home" ? images.leafActive : images.leaf
                }
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 30,
                  marginTop: -2,
                  marginLeft: -5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <ScalableText
                style={{
                  display: value.activeName == "Home" ? "flex" : "none",
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,1)",
                  fontSize: osName == "Android" ? 13 : 15,
                  marginLeft: 8,
                  textAlignVertical: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Home
              </ScalableText>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                value.activeName == "Booking"
                  ? styles.iconsActive
                  : styles.iconsInActive
              }
              onPress={() => {
                setValue({ activeName: "Booking" });
                activeName("Booking");
              }}
            >
              <Image
                source={
                  value.activeName == "Booking"
                    ? images.bchatActive
                    : images.bchat
                }
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 30,
                  marginTop: -2,
                  marginLeft: -8,
                  alignItems: "center",
                }}
              />
              <ScalableText
                style={{
                  display: value.activeName == "Booking" ? "flex" : "none",
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,1)",
                  fontSize: osName == "Android" ? 13 : 15,
                  marginLeft: 3,
                }}
              >
                Schedule
              </ScalableText>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={
                value.activeName == "Call"
                  ? styles.iconsActive
                  : styles.iconsInActive
              }
              onPress={() => {
                setValue({ ...value, activeName: "Call" });
                activeName("Call");
              }}
            >
              <Image
                source={
                  value.activeName == "Call"
                    ? images.bookmarkActive
                    : images.bookmark
                }
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 30,
                  marginTop: -2,
                  marginLeft: -8,
                }}
              />
              <Text
                style={{
                  display: value.activeName == "Call" ? "flex" : "none",
                  backgroundColor: "transparent",
                  lineHeight: 24,
                  color: "rgba(255,255,255,1)",
                  fontSize: 16,
                  marginLeft: 13,
                  textAlign: "center",
                  marginTop: 1,
                }}
              >
                Call
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={
                value.activeName == "User"
                  ? styles.iconsActive
                  : styles.iconsInActive
              }
              onPress={() => {
                setValue({ ...value, activeName: "User" });
                activeName("User");
              }}
            >
              <Image
                source={
                  value.activeName == "User"
                    ? images.single04Active
                    : images.single04
                }
                resizeMode="contain"
                style={{
                  width: 28,
                  height: 30,
                  marginTop: -2,
                  marginLeft: -8,
                  alignItems: "center",
                }}
              />
              <ScalableText
                style={{
                  display: value.activeName == "User" ? "flex" : "none",
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,1)",
                  fontSize: osName == "Android" ? 13 : 15,
                  marginLeft: 13,
                }}
              >
                Profile
              </ScalableText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TabBarHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 40,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  tabBarHomeDark: {
    height: 72,
    width: "100%",
  },
  iconsInActive: {
    height: 24,
    marginRight: "8%",
    marginLeft: "8%",
    marginTop: 8,
  },
  rectangle7: {
    height: 72,
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
    elevation: 3,
  },
  base: {
    height: 40,
    width: 107,
    borderRadius: 10,
    backgroundColor: "rgba(255,163,123,1)",
    flexDirection: "row",
  },
  iconsStayAtHome: {
    height: 24,
    width: 24,
    backgroundColor: "white",
  },
  textActive: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 8,
  },
  iconsActive: {
    height: 30,
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 15,
    height: 40,
    width: 110,
    borderRadius: 10,
    backgroundColor: "rgba(255,163,123,1)",
    flexDirection: "row",
    elevation: 3,
    alignItems: "center",
  },
  iconsCalendar2: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 39,
    marginTop: 8,
  },
  iconsConversation: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginLeft: 38,
    marginTop: 8,
  },
  iconsAdd: {
    height: 24,
    width: 24,
  },
  baseRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16,
    justifyContent: "space-between",
  },
});
