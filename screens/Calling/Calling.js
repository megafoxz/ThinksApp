import React, { useState, useEffect } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Fontisto } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

// theme
import { COLORS, FONTS, SIZES, images } from "../../constants";

const ReceivePhoneCall = ({ route, navigation }) => {
  const { item } = route.params;
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    async function getInfoCall() {
      //Handle API
      console.log(item);
    }

    getInfoCall();
    //Clean value
  }, []);

  //state 1 Calling
  const Calling = () => {
    return (
      <LinearGradient
        colors={["#003c9c", "#373B44"]}
        style={{ height: "100%", top: 0, flex: 1 }}
      >
        <TouchableOpacity
          style={{
            zIndex: 1,
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
            backgroundColor: "rgba(255,246,242,1)",
          }}
          onPress={() => navigation.goBack()}
        >
          <Svg viewBox="0 0 8 16">
            <Path
              strokeWidth={0}
              fill="rgba(255,163,123,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.20 8.59 L6.37 15.62 C6.64 15.93 7.27 16.20 7.72 15.80 C8.18 15.40 7.99 14.81 7.72 14.50 L2.04 8.03 L7.72 1.55 C7.99 1.24 8.18 0.62 7.72 0.19 C7.26 -0.23 6.64 0.12 6.37 0.43 L0.20 7.47 C-0.07 7.77 -0.07 8.28 0.20 8.59 Z"
            ></Path>
          </Svg>
        </TouchableOpacity>
        <View
          //center
          //bottom
          style={styles.imageAndTextContainer}
        >
          <Image
            source={{
              uri:
                item.userAdminAvatar ||
                "https://thuocdantoc.vn/wp-content/uploads/2019/03/Benh-vien-mat-cao-thang-1.jpg",
            }}
            resizeMode="center"
            style={{
              shadowColor: "rgba(0,0,0,0.08)",
              shadowOffset: {
                height: 6,
                width: 5,
              },
              shadowRadius: 18,
              shadowOpacity: 1,
              resizeMode: "cover",
              width: SIZES.height * 0.2,
              height: SIZES.height * 0.2,
              top: "15%",
              borderRadius: (SIZES.height * 0.2) / 2,
            }}
          />
          <View
            style={{
              top: "20%",
            }}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                fontSize: 18,
                marginBottom: 10,
                textAlign: "center",
                color: COLORS.gray2,
              }}
            >
              Calling to ...
            </Text>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {item.brandName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              bottom: 100,
              position: "absolute",
            }}
          >
            {/* Button 1 */}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                width: SIZES.height * 0.08,
                height: SIZES.height * 0.08,
                borderRadius: (SIZES.height * 0.08) / 2,
                marginRight: 30,
                marginTop: 10,
                backgroundColor: COLORS.white,
              }}
              onPress={() => {
                setIsActive(true);
              }}
            >
              <Fontisto
                name="mic"
                style={{
                  marginTop: 0,
                  alignItems: "center",
                  textAlign: "center",
                }}
                size={SIZES.width / 20}
                color={COLORS.black}
              />
            </TouchableOpacity>
            {/* Button Call and End Call*/}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                width: SIZES.height * 0.1,
                height: SIZES.height * 0.1,
                borderRadius: (SIZES.height * 0.1) / 2,
                backgroundColor: COLORS.red,
              }}
              onPress={() => {
                setIsActive(true);
                setTimeout(function () {
                  navigation.goBack();
                }, 2000);
              }}
            >
              <Fontisto
                name="phone"
                style={{
                  marginTop: 0,
                  alignItems: "center",
                  textAlign: "center",
                }}
                size={SIZES.width / 20}
                color={COLORS.white}
              />
            </TouchableOpacity>
            {/* Button 2 */}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                width: SIZES.height * 0.08,
                height: SIZES.height * 0.08,
                borderRadius: (SIZES.height * 0.08) / 2,
                marginLeft: 30,
                marginTop: 10,
                backgroundColor: COLORS.white,
              }}
              onPress={() => {
                setIsActive(true);
              }}
            >
              <Fontisto
                name="camera"
                style={{
                  marginTop: 0,
                  alignItems: "center",
                  textAlign: "center",
                }}
                size={SIZES.width / 20}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  };

  //state 2 EndCall
  const EndCall = () => {
    return (
      <LinearGradient
        colors={["#003c9c", "#373B44"]}
        style={{ height: "100%", top: 0, flex: 1 }}
      >
        <View
          //center
          //bottom
          style={styles.imageAndTextContainer}
        >
          <View
            style={{ flexDirection: "row", top: "35%", position: "relative" }}
          >
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/a2ds-c778d.appspot.com/o/public%2Fuser%2F7%2Favatar%2Fpasted%20image%200%20(1).png?alt=media&token=d53bb3e8-fd78-462d-a780-ec2aef4fdfcc",
              }}
              resizeMode="center"
              style={{
                shadowColor: "rgba(0,0,0,0.08)",
                shadowOffset: {
                  height: 6,
                  width: 5,
                },
                shadowRadius: 18,
                shadowOpacity: 1,
                resizeMode: "cover",
                width: SIZES.height * 0.16,
                height: SIZES.height * 0.16,
                borderRadius: (SIZES.height * 0.16) / 2,
              }}
            />
            <Image
              source={{
                uri:
                  item.userAdminAvatar ||
                  "https://thuocdantoc.vn/wp-content/uploads/2019/03/Benh-vien-mat-cao-thang-1.jpg",
              }}
              resizeMode="center"
              style={{
                shadowColor: "rgba(0,0,0,0.08)",
                shadowOffset: {
                  height: 6,
                  width: 5,
                },
                shadowRadius: 18,
                shadowOpacity: 1,
                resizeMode: "cover",
                width: SIZES.height * 0.16,
                height: SIZES.height * 0.16,
                borderRadius: (SIZES.height * 0.16) / 2,
                marginLeft: -40,
              }}
            />
          </View>

          <View
            style={{
              top: "20%",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {item.brandName}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: 30,
                textAlign: "center",
                color: COLORS.gray2,
              }}
            >
              Call Ended
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              bottom: 100,
              position: "absolute",
            }}
          ></View>
        </View>
      </LinearGradient>
    );
  };

  switch (isActive) {
    case true:
      return <EndCall />;
    case false:
      return <Calling />;
    default:
      return <Calling />;
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    width: SIZES.width,
    height: SIZES.height,
    alignItems: "center",
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "10%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70,
    height: SIZES.height / 5.5,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.orange,
    marginHorizontal: SIZES.radius / 4,
  },
});

export default ReceivePhoneCall;
