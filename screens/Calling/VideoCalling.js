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

import { Camera } from "expo-camera";
import * as rn from "react-native";

// theme
import { COLORS, FONTS, SIZES, images } from "../../constants";

const ReceivePhoneCall = ({ navigation }) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isActive, setIsActive] = useState(false);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    if (cameraPermission.status !== "granted") {
      rn.Alert.alert("Permission for media access needed.!");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);
  // Render
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
          top: 50,
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
        <View
          style={{ bottom: 0, position: "absolute", height: SIZES.height / 2 }}
        >
          <Camera
            ref={(ref) => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={"1:1"}
          ></Camera>
        </View>

        <View
          style={{
            flexDirection: "row",
            bottom: 50,
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
              backgroundColor: isActive == true ? COLORS.red : COLORS.lime,
            }}
            onPress={() => {
              setIsActive(true);
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

  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
});

export default ReceivePhoneCall;
