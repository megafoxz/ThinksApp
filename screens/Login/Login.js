import React, { Component, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { Fontisto } from "@expo/vector-icons";
import { styles } from "./styles/Login.styles";
import ScalableText from "react-native-text";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "../../service/firebase";

//Constants
import { COLORS, FONTS, SIZES } from "../../constants";
//Component
import * as rn from "react-native";
//Service
// import AuthenticationService from "../../service/authentication";
// import { AsyncStorage } from "react-native";

function isVietnamesePhoneNumber(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

const Login = ({ navigation }) => {
  //Execute
  const [phoneNumber, setPhoneNumber] = useState("");
  const recaptchaVerifier = useRef(null);

  const sendVerifyNumber = () => {
    if (phoneNumber != "" && isVietnamesePhoneNumber(phoneNumber) == true) {
      var phone = phoneNumber.replace(/^0+/, "+84");
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phone, recaptchaVerifier.current)
        .then((code) => {
          navigation.push("Verify", { verificationId: code });
        })
        .catch((error) => {
          console.warn(error);
          rn.Alert.alert("Invalid Login credentials!");
        });
    } else {
      rn.Alert.alert("Phone undifined");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectangleStack}>
        <View style={styles.rectangle}>
          <ScalableText
            adjustsFontSizeToFit
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#FFF",
              position: "relative",
              top: 65,
              width: "100%",
              textAlign: "center",
            }}
          >
            Đăng nhập
          </ScalableText>
        </View>

        {/* Block Login */}
        <View style={styles.rectangle1}>
          {/* Username */}
          <ScalableText adjustsFontSizeToFit style={styles.firstNameLastNa}>
            Số điện thoại
          </ScalableText>
          <TextInput
            keyboardType="phone-pad"
            onChangeText={setPhoneNumber}
            style={{
              width: "90%",
              marginTop: "2%",
              marginRight: "5%",
              marginLeft: "5%",
              height: 44,
              borderWidth: 1,
              paddingLeft: 10,
              borderColor: "rgba(116,127,158,1)",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
            placeholder="  Nhập số điện thoại"
          />

          {/* Password */}
          {/* <Text style={styles.firstNameLastNa}>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => setValue({ ...value, password: text })}
            style={{
              width: "90%",
              marginTop: "2%",
              marginRight: "5%",
              marginLeft: "5%",
              height: 44,
              borderWidth: 1,
              paddingLeft: 10,
              borderColor: "rgba(116,127,158,1)",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
            placeholder="  Enter password"
          /> */}
          {/* <TouchableOpacity
            onPress={() => {
              navigation.push("ForgotPassword");
            }}
          >
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity> */}
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
                phoneNumber.length > 0 ? COLORS.orange : COLORS.lightBlue,
            }}
            onPress={sendVerifyNumber}
          >
            <ScalableText
              adjustsFontSizeToFit
              style={{
                ...FONTS.h4,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              Đăng nhập
            </ScalableText>
          </TouchableOpacity>
          {/* End login button */}
        </View>
        {/* End Block Login */}

        {/* Button Login */}
      </View>
      <View style={styles.text}>
        {/* <View style={styles.dontHaveAnAccounRow}>
          <Text style={styles.dontHaveAnAccoun}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push("SignUp");
            }}
          >
            <Text style={styles.signUpNow}>Sign up now!</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
      {/* Line Row */}
      <View style={styles.text1}>
        <View style={styles.line1Row}>
          <Svg viewBox="-0.5 -0.5 69 3" style={styles.line1}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(215,217,229,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.50 0.50 L66.50 0.50 "
            ></Path>
          </Svg>
          <ScalableText adjustsFontSizeToFit style={styles.or}>
            Or
          </ScalableText>
          <Svg viewBox="-0.5 -0.5 69 3" style={styles.line}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(215,217,229,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.50 0.50 L66.50 0.50 "
            ></Path>
          </Svg>
        </View>
      </View>

      {/* End Line Row */}

      {/* Login another */}
      <View style={styles.cardSpecialistRow}>
        <TouchableOpacity>
          <View style={styles.cardSpecialist}>
            <View style={styles.rectangle2Stack}>
              <View style={styles.rectangle2}>
                <ScalableText adjustsFontSizeToFit style={styles.orthopodist}>
                  Facebook
                </ScalableText>
              </View>
              <View style={[styles.icon2]}>
                <View style={styles.slotF}>
                  <ScalableText
                    adjustsFontSizeToFit
                    style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}
                  >
                    f
                  </ScalableText>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardSpecialist1}>
            <View style={styles.rectangle3Stack}>
              <View style={styles.rectangle3}>
                <ScalableText adjustsFontSizeToFit style={styles.orthopodist}>
                  Google
                </ScalableText>
              </View>
              <View style={styles.icon2}>
                <View style={styles.slotG}>
                  <ScalableText
                    adjustsFontSizeToFit
                    style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}
                  >
                    G
                  </ScalableText>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* End Login another */}
    </View>
  );
};

export default Login;
