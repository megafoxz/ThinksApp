import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import ScalableText from "react-native-text";
import { Fontisto } from "@expo/vector-icons";
import * as rn from "react-native";
//Library function
import Helpers from "../../../plugins/helpers";
import moment from "moment";
import { SIZES, COLORS } from "../../../constants";
import {
  ApplicationLocalStorageUserDataName,
  ApplicationCookieTokenIDName,
} from "../../../plugins/setting";
//Loading
import SkeletonContent from "react-native-skeleton-content";
import { AsyncStorage } from "react-native";

export default function header({ navigation }) {
  const [value, setValue] = useState({
    name: "User",
    avatar: "#",
    today: "Friday, 4 Sep",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function getUserProfile() {
    //Handle API
    try {
      setIsLoading(true);
      //Get Local Storage
      const authData = JSON.parse(
        await AsyncStorage.getItem(ApplicationLocalStorageUserDataName)
      );
      const token = await AsyncStorage.getItem(ApplicationCookieTokenIDName);
      console.log(authData);
      console.log(token);

      setValue({
        name: authData.fullName,
        avatar: authData.avatar,
        today: moment().format("dddd, DD MMM"),
      });
      setTimeout(function () {
        setIsLoading(false);
      }, 500);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUserProfile();
    //Clean value
  }, []);
  return (
    <View>
      <View style={styles.avatar2Row}>
        <SkeletonContent
          containerStyle={{ flex: 1, width: 300, zIndex: 1 }}
          animationDirection="horizontalLeft"
          isLoading={isLoading}
        >
          <Image
            style={styles.avatar2}
            resizeMode="cover"
            source={{
              uri:
                value.avatar ||
                "https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png",
            }}
          />
        </SkeletonContent>

        {/* <View style={styles.rectangle1}>
          <Fontisto
            name="search"
            style={{
              marginTop: 8,
              alignItems: "center",
              textAlign: "center",
            }}
            size={SIZES.width / 17}
            color={COLORS.orange}
          />
        </View> */}
        <TouchableOpacity
          onPress={() => {
            navigation.push("Notification");
          }}
          style={styles.rectangle2}
        >
          <Fontisto
            name="bell"
            style={{
              marginTop: 8,
              textAlign: "center",
              alignItems: "center",
            }}
            size={SIZES.width / 17}
            color={COLORS.orange}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <SkeletonContent
          containerStyle={{ flex: 1, width: 300 }}
          isLoading={isLoading}
          layout={[
            { width: 180, height: 25, marginBottom: 6 },
            { width: 220, height: 25, marginBottom: 6 },
          ]}
        >
          <ScalableText adjustsFontSizeToFit style={styles.friday4Sep}>
            {value.today}
          </ScalableText>
          <ScalableText adjustsFontSizeToFit style={styles.hiRileyCooper}>
            Chào, {Helpers.GetFirstLastName(value.name)}
          </ScalableText>
        </SkeletonContent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle1: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255,246,242,1)",
    right: 0,
    position: "absolute",
  },
  rectangle2: {
    zIndex: 1,
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 10,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(255,246,242,1)",
    elevation: 3,
  },
  iconsBack1: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 8,
    marginLeft: 8,
  },
  text: {
    height: 64,
    width: 214,
    marginTop: 19,
    marginLeft: 24,
  },
  friday4Sep: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(176,179,199,1)",
    fontSize: 16,
  },
  hiRileyCooper: {
    backgroundColor: "transparent",
    lineHeight: 40,
    color: "rgba(38,44,61,1)",
    fontSize: 28,
    width: "100%",
  },
  avatar2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
  },
  avatar2: {
    height: 50,
    width: 50,
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  iconsBack1: {
    height: 50,
    width: 50,
    backgroundColor: "transparent",
    marginLeft: 191,
  },
  iconsBack: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    marginLeft: 16,
  },
});
