import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";

//Constants
import { COLORS, FONTS, SIZES } from "../../constants";
import { styles } from "./styles/Verify.styles";

//Component
import * as rn from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
//Popup-UI
import Root from "../../components/popup-ui/Root";
import Popup from "../../components/popup-ui/Popup";

import * as Device from "expo-device";
import ScalableText from "react-native-text";

//Function
import firebase from "../../service/firebase";
import {
  ApplicationPhoneNumberVerified,
  ApplicationCookieTokenIDName,
  ApplicationLocalStorageUserDataName,
} from "../../plugins/setting";
import { AsyncStorage } from "react-native";
import AuthenticationService from "../../service/authentication";

const Verify = ({ navigation, route }) => {
  const verificationId = route.params.verificationId;
  const [timerCount, setTimer] = useState(2400);
  const CELL_COUNT = 6;
  const [code, setCode] = useState("");
  const ref = useBlurOnFulfill({ code, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const [osName, setOsName] = useState("");

  //Set Timeout OTP
  const timeOutOTP = () => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount > 0) return lastTimerCount - 1;
        else return lastTimerCount;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => {
      clearInterval(interval);
    };
  };

  //verify confirm
  const confirmCode = async () => {
    if (timerCount < 1) {
      rn.Alert.alert("Time out! Please try again!!!");
      return;
    }
    const credential = await firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );

    await firebase
      .auth()
      .signInWithCredential(credential)
      .then(async (result) => {
        AsyncStorage.removeItem(ApplicationPhoneNumberVerified);
        AsyncStorage.removeItem(ApplicationCookieTokenIDName);
        AsyncStorage.removeItem(ApplicationLocalStorageUserDataName);

        AsyncStorage.setItem(
          ApplicationPhoneNumberVerified,
          JSON.stringify(result.user.phoneNumber)
        );

        console.log("Verify successfully");
        //Handle checkphone => Login or register
        var body = {
          phoneNumber: result.user.phoneNumber,
        };

        //Test Call API
        var status = await fetch(
          "http://118.69.43.145:2013/api/App/CheckPhone",
          {
            method: "POST",
            headers: {
              Accept: "application.json",
              "Content-Type": "application/json",
            },
            query: {},
            body: JSON.stringify(body),
          }
        )
          .then((response) => response.json())
          .then((response) => {
            return response;
          });

        if (status == true) {
          var loginResult = await fetch(
            "http://118.69.43.145:2013/api/App/Login",
            {
              method: "POST",
              headers: {
                Accept: "application.json",
                "Content-Type": "application/json",
              },
              query: {},
              body: JSON.stringify(body),
            }
          )
            .then((response) => response.json())
            .then((response) => {
              return response;
            });
          AsyncStorage.setItem(
            ApplicationCookieTokenIDName,
            loginResult.tokenID
          );
          AsyncStorage.setItem(
            ApplicationLocalStorageUserDataName,
            JSON.stringify(loginResult.authData)
          );

          //When set token and data will return in Home
          navigation.navigate("Home");
        } else {
          //Show Popup andr redirect to Register
          Popup.show({
            type: "Warning",
            title: "Số điện thoại chưa được đăng kí",
            textBody:
              "Số điện thoại " +
              result.user.phoneNumber +
              " chưa được đăng kí. Bạn có muốn đăng kí ?",
            button: true,
            buttonText: "Quay lại",
            button1: true,
            buttonText1: "Đồng ý",
            callback: () => {
              Popup.hide();
            },
            callback1: () => {
              Popup.hide();
              navigation.push("RegisterProfile", {
                phoneNumber: result.user.phoneNumber,
              });
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        rn.Alert.alert("Invalid Login credentials!");
      });
  };

  useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);
    timeOutOTP();
  }, []);

  return (
    <Root>
      <View style={styles.container}>
        <View style={styles.rectangleStack}>
          <View style={styles.rectangle}>
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: "absolute",
                width: 30,
                marginLeft: "5%",
                height: 40,
                top: osName == "Android" ? 32 : 60,
                padding: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: COLORS.white,
                borderColor: "rgba(116,127,158,1)",
                elevation: 3,
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
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFF",
                position: "relative",
                top: osName == "Android" ? 37 : 69,
                width: "100%",
                textAlign: "center",
              }}
            >
              Xác nhận
            </ScalableText>
          </View>
          {/* Block Login */}
          <View
            style={{
              position: "absolute",
              top: osName == "Android" ? 130 : 160,
              height: 270,
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
              elevation: 3,
              shadowOpacity: 1,
            }}
          >
            {/* Username */}
            <ScalableText style={styles.title}>
              Nhập mã OTP để kiểm tra.
            </ScalableText>
            <View
              style={{
                marginRight: "3%",
                marginLeft: "3%",
              }}
            >
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <ScalableText
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </ScalableText>
                )}
              />
            </View>

            {/* End Verify number */}
            <TouchableOpacity
              onPress={timeOutOTP}
              style={{
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor:
                  timerCount == 0 ? COLORS.orange : COLORS.lightBlue,
                padding: 10,
                marginHorizontal: "20%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
                marginBottom: 30,
              }}
            >
              <ScalableText style={{ color: COLORS.white }}>
                Gửi lại : {timerCount} giây
              </ScalableText>
            </TouchableOpacity>
            {/* Login button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                justifyContent: "center",
                bottom: 13,
                width: "90%",
                marginTop: "5%",
                marginRight: "5%",
                marginLeft: "5%",
                height: 44,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 15,
                elevation: 3,
                backgroundColor:
                  code.length == 6 ? COLORS.orange : COLORS.lightBlue,
              }}
              disabled={code.length < 6}
              onPress={confirmCode}
            >
              <ScalableText
                style={{
                  ...FONTS.h4,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                Xác nhận
              </ScalableText>
            </TouchableOpacity>
            {/* End login button */}
          </View>
          {/* End Block Login */}

          {/* Button Login */}
        </View>
        {/* <View style={styles.text}>
        <View style={styles.dontHaveAnAccounRow}>
          <Text style={styles.dontHaveAnAccoun}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Login");
            }}
          >
            <Text style={styles.signUpNow}>Sign in!</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      </View>
    </Root>
  );
};

export default Verify;
