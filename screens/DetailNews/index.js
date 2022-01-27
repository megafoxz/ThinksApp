import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import moment from "moment";
import ScalableText from "react-native-text";

import RNPickerSelect from "react-native-picker-select";
import { Fontisto } from "@expo/vector-icons";
import Avatar from "../../components/common/Avatar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import * as Device from "expo-device";

//Constant
import { images, COLORS, FONTS, SIZES } from "../../constants";

function DetailProfile({ route, navigation }) {
  const [osName, setOsName] = useState("");

  const { item } = route.params;
  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);

    async function getNewsItem() {
      //Handle API
      console.log(item);
    }

    getNewsItem();
    //Clean value
  }, []);

  return (
    <SafeAreaView style={{ marginTop: -50, flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            height: osName == "Android" ? SIZES.height * 1.5 : SIZES.height,
          }}
        >
          <View style={styles.rectangleStack}>
            <View
              style={{
                position: "absolute",
                top: osName == "Android" ? 40 : 0,
                left: 0,
                height: "30%",
                width: "100%",
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
                backgroundColor: "rgba(255,163,123,1)",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  width: 30,
                  marginLeft: "5%",
                  height: 40,
                  top: 60,
                  padding: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: COLORS.white,
                  borderColor: "rgba(116,127,158,1)",
                  zIndex: 1,
                }}
                onPress={() => navigation.goBack()}
              >
                <Fontisto
                  name="angle-left"
                  style={{
                    marginTop: 0,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  size={SIZES.width / 20}
                  color={COLORS.orange}
                />
              </TouchableOpacity>
              <ScalableText
                adjustsFontSizeToFit
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFF",
                  position: "relative",
                  top: 65,
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "20%",
                }}
              >
                News
              </ScalableText>
            </View>
            {/* Avatar */}
            <View
              style={{
                top: osName == "Android" ? 180 : 130,
                height: osName == "Android" ? "100%" : "80%",
                width: "90%",
                marginRight: "5%",
                marginLeft: "5%",
                borderRadius: 16,
                shadowColor: "rgba(0,0,0,0.08)",
                shadowOffset: {
                  height: 6,
                  width: 5,
                },
                shadowRadius: 18,
                shadowOpacity: 1,
                backgroundColor: "rgba(255,255,255,1)",
                alignItems: "center",
                elevation: 3,
              }}
            >
              <View style={styles.newsInfo}>
                {/* Title */}
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <ScalableText
                    adjustsFontSizeToFit
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {item.heading}
                  </ScalableText>
                </View>

                <Image
                  source={{ uri: item.image }}
                  resizeMode="contain"
                  style={{
                    width: "100%",
                    height: 200,
                    marginVertical: 10,
                  }}
                ></Image>
                {/* Content */}
                <View style={{ flexDirection: "row" }}>
                  <ScalableText adjustsFontSizeToFit style={{ fontSize: 18 }}>
                    {item.descritpion}
                  </ScalableText>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newsInfo: {
    marginTop: "5%",
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
  },
  title: {
    height: 16,
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(116,127,158,1)",
    fontSize: 15,
    marginBottom: "2%",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "white",
    height: SIZES.height * 1.5,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "30%",
    width: "100%",
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    backgroundColor: "rgba(255,163,123,1)",
    elevation: 3,
    zIndex: 0,
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: -50,
  },
  rectangle1: {
    position: "absolute",
    top: 130,
    height: "85%",
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    display: "flex",
    alignItems: "center",
    elevation: 3,
    zIndex: 1,
  },
  oval: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  iconsArCamera: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 20,
    width: 20,
    backgroundColor: "transparent",
  },
  ovalStack: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 174,
  },

  buttonsPrimaryDisabled: {
    position: "absolute",
    top: 734,
    left: 40,
    height: 44,
    width: 295,
    backgroundColor: "transparent",
  },
  rectangleStack: {
    width: "100%",
    height: SIZES.height,
  },
});

export default DetailProfile;
