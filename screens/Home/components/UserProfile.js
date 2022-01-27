import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import SkeletonContent from "react-native-skeleton-content";

import * as Device from "expo-device";

import * as rn from "react-native";

//Constants
import { images, COLORS, FONTS, SIZES } from "../../../constants";
import { AsyncStorage } from "react-native";

import ScalableText from "react-native-text";

//Popup-UI
import Root from "../../../components/popup-ui/Root";
import Popup from "../../../components/popup-ui/Popup";

//Library function
import {
  ApplicationPhoneNumberVerified,
  ApplicationCookieTokenIDName,
  ApplicationLocalStorageUserDataName,
} from "../../../plugins/setting";

//Service

//Component

function Login({ navigation }) {
  const [value, setValue] = useState({
    name: "User",
    avatar: "#",
    address: "",
  });
  const [osName, setOsName] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isInfoLoading, setInfoLoading] = useState(false);

  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);

    async function getUserProfile() {
      //Handle API
      const authData = JSON.parse(
        await AsyncStorage.getItem(ApplicationLocalStorageUserDataName)
      );
      console.log(authData);

      setValue({
        name: authData.fullName,
        avatar: authData.avatar,
        address: authData.address,
      });

      setTimeout(function () {
        setIsLoading(false);
      }, 500);
    }

    getUserProfile();
    return () => {
      setValue({
        name: "User",
        avatar: "#",
        address: "",
      });
      setOsName("");
    };
    //Clean value
  }, []);
  return (
    <Root>
      <View>
        {/* {isInfoLoading == true && (
          <View
            style={{
              flex: 1,
              height: "100%",
              width: SIZES.width,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              backgroundColor: COLORS.transparentBlack9,
              position: "absolute",
              display: isLoading == true ? "flex" : "none",
              zIndex: 9999,
              elevation: 3,
            }}
          >
            <ActivityIndicator size="large" color={COLORS.orange} />
          </View>
        )} */}
        <View style={styles.rectangle}>
          <ScalableText
            adjustsFontSizeToFit
            style={{
              top: 120,
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFF",
              position: "relative",
              width: "100%",
              textAlign: "center",
            }}
          >
            Thông tin cá nhân
          </ScalableText>
        </View>
        {/* Block User Profile */}

        <TouchableOpacity
          onPress={() => {
            navigation.push("DetailProfile");
          }}
          style={styles.rectangle1}
        >
          <View style={styles.rectangle1Row}>
            <SkeletonContent
              containerStyle={{ flex: 1, width: 100 }}
              isLoading={isLoading}
            >
              <Image
                height="100%"
                width="100%"
                source={{
                  uri:
                    value.avatar ||
                    "https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png",
                }}
                resizeMode="cover"
                alt="Background-img"
                style={styles.rectangleImage}
              />
            </SkeletonContent>

            <View
              style={{
                width: 195,
                marginLeft: osName == "Android" ? 0 : 16,
                marginTop: 7,
                marginBottom: 6,
              }}
            >
              <SkeletonContent
                containerStyle={{ flex: 1, width: 300 }}
                isLoading={isLoading}
                layout={[
                  { width: 100, height: 25, marginBottom: 6 },
                  { width: 90, height: 25, marginBottom: 6 },
                ]}
              >
                <ScalableText adjustsFontSizeToFit style={styles.fullName}>
                  {value.name}
                </ScalableText>
                <ScalableText adjustsFontSizeToFit style={styles.address}>
                  {value.address}
                </ScalableText>
              </SkeletonContent>
            </View>
            <View style={styles.rectangleUser}>
              <Fontisto
                name="angle-right"
                style={{
                  marginTop: 8,
                  alignItems: "center",
                  textAlign: "center",
                }}
                size={SIZES.width / 17}
                color={COLORS.orange}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* Sub info */}
        {/* <View style={{ flexDirection: "row" }}>
        <View style={styles.rectangle2}>
          <Image
            source={images.newrecord}
            resizeMode="stretch"
            style={{
              marginTop: "10%",
              marginBottom: "5%",
              width: "35%",
              height: "60%",
              left: 10,
            }}
          ></Image>
          <View style={styles.InfoColumnItem}>
            <Text style={styles.titleItem}>Health Records</Text>
          </View>
        </View>
        <View style={styles.rectangle2Right}>
          <Image
            source={images.chat}
            resizeMode="stretch"
            style={{
              marginTop: "10%",
              marginBottom: "5%",
              width: "35%",
              height: "60%",
              left: 10,
            }}
          ></Image>
          <View style={styles.InfoColumnItem}>
            <Text style={styles.titleItem}>History</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.rectangle3}>
          <Image
            source={images.newspaper}
            resizeMode="stretch"
            style={{
              marginTop: "10%",
              marginBottom: "5%",
              width: "35%",
              height: "60%",
              left: 10,
            }}
          ></Image>
          <View style={styles.InfoColumnItem}>
            <Text style={styles.titleItem}>Health monitoring</Text>
          </View>
        </View>
        <View style={styles.rectangle3Right}>
          <Image
            source={images.newrecord}
            resizeMode="stretch"
            style={{
              marginTop: "10%",
              marginBottom: "5%",
              width: "35%",
              height: "60%",
              left: 10,
            }}
          ></Image>
          <View style={styles.InfoColumnItem}>
            <Text style={styles.titleItem}>Calendar Reminder</Text>
          </View>
        </View>
      </View> */}
        {/* End Sub Info */}

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.rectangle5}
            onPress={() => {
              // Popup.show({
              //   type: "Warning",
              //   title: "Xác nhận",
              //   textBody: "Bạn có muốn đăng xuất ?",
              //   button: true,
              //   buttonText: "Quay lại",
              //   button1: true,
              //   buttonText1: "Đồng ý",
              //   callback: () => {
              //     Popup.hide();
              //   },
              //   callback1: () => {
              //     Popup.hide();
              //     AsyncStorage.removeItem(ApplicationPhoneNumberVerified);
              //     AsyncStorage.removeItem(ApplicationCookieTokenIDName);
              //     AsyncStorage.removeItem(ApplicationLocalStorageUserDataName);
              //     navigation.push("Login");
              //   },
              // });
              rn.Alert.alert("Đăng xuất thành công!");
              AsyncStorage.removeItem(ApplicationPhoneNumberVerified);
              AsyncStorage.removeItem(ApplicationCookieTokenIDName);
              AsyncStorage.removeItem(ApplicationLocalStorageUserDataName);
              navigation.push("Login");
            }}
          >
            <Image
              source={images.logout}
              resizeMode="stretch"
              style={{
                marginTop: "10%",
                marginBottom: "5%",
                width: "28%",
                height: "50%",
                left: 10,
              }}
            ></Image>
            <View style={styles.InfoColumnItem}>
              <ScalableText adjustsFontSizeToFit style={styles.titleItem}>
                Đăng xuất
              </ScalableText>
            </View>
          </TouchableOpacity>
        </View>

        {/* End User Profile */}
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  oval6: {
    position: "absolute",
    height: 60,
    width: 20,
    top: 29,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  oval6Stack: {
    top: 2,
    left: 0,
    width: 55,
    height: 49,
    position: "absolute",
  },
  rectangleIcon: {
    height: 38,
    width: 38,
    borderRadius: 10,
  },
  rectangleUser: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255,246,242,1)",
    right: 0,
    position: "absolute",
    top: "25%",
  },
  rectangleImage: {
    height: 85,
    width: 85,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)",
  },
  fullName: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    backgroundColor: "transparent",
    lineHeight: 30,
    color: COLORS.gray,
    fontSize: 15,
  },
  titleItem: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 18,
  },
  listTitleItem: {
    marginLeft: "10%",
    marginRight: "5%",
    marginTop: 30,
    marginBottom: 6,
  },
  phone: {
    height: 20,
    width: 195,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 3,
  },
  InfoColumn: {
    width: 195,
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6,
  },
  InfoColumnItem: {
    width: 100,
    marginLeft: 15,
    marginTop: 25,
    marginBottom: 25,
    textAlign: "center",
    alignItems: "center",
  },
  rectangle1Row: {
    height: 92,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16,
    flexDirection: "row",
  },
  rectangle2Row: {
    height: 92,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16,
    flexDirection: "row",
  },
  rectangle: {
    position: "absolute",
    top: -100,
    left: 0,
    height: 250,
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    backgroundColor: "rgba(255,163,123,1)",
    right: 0,
  },

  rectangle1: {
    zIndex: 1,
    position: "relative",
    top: 100,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    elevation: 1,
  },

  rectangle2: {
    position: "relative",
    top: 120,
    height: SIZES.height / 10,
    marginLeft: "5%",
    width: "42.5%",
    marginRight: "2,5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },

  rectangle2Right: {
    position: "relative",
    top: 120,
    height: SIZES.height / 10,
    marginRight: "5%",
    width: "42.5%",
    marginLeft: "2,5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },

  rectangle3: {
    position: "relative",
    top: 130,
    height: SIZES.height / 10,
    marginLeft: "5%",
    width: "42.5%",
    marginRight: "2,5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },

  rectangle3Right: {
    position: "relative",
    top: 130,
    height: SIZES.height / 10,
    marginRight: "5%",
    width: "42.5%",
    marginLeft: "2,5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },

  rectangle5: {
    position: "relative",
    top: 120,
    marginLeft: "5%",
    width: "42.5%",
    marginRight: "52.5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    elevation: 3,
  },

  rectangle5Right: {
    position: "relative",
    top: 150,
    height: SIZES.height / 10,
    marginRight: "5%",
    width: "42.5%",
    marginLeft: "2,5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },

  rectangle28: {
    height: 44,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    marginTop: 8,
  },

  rectangle4: {
    position: "relative",
    top: 150,
    height: SIZES.height / 5,
    marginRight: "5%",
    width: "90%",
    marginLeft: "5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
  },
});

export default Login;
