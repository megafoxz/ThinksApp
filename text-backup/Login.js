import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SIZES, COLORS, images, FONTS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../components/common/CustomButton";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = ({ navigation }) => {
  const [defaultSignIn, setDefaultSignIn] = useState(false);
  const [defaultSignUp, setDefaultSignUp] = useState(false);
  const renderHeader = () => {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: "flex-end" }}
          source={images.login_background}
        >
          <LinearGradient
            style={{ height: 200, justifyContent: "flex-end" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
          >
            <Text
              adjustsFontSizeToFit
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                width: "100%",
                paddingHorizontal: 10,
                fontFamily: "Roboto-Black",
              }}
            >
              Health Information Systems
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          adjustsFontSizeToFit
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
            width: "70%",
            marginTop: 12,
          }}
        >
          This software is part of A2DS Management System for Hospital
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            text="Login"
            colors={[COLORS.darkGreen, COLORS.blue]}
            onPress={() => {
              setDefaultSignIn(true);
            }}
            buttonContainerStyle={{ marginTop: SIZES.padding }}
          />
          {/* <CustomButton
                        text="Sign Up"
                        colors={[]}
                        onPress={() => {
                            setDefaultSignUp(true)
                        }}
                        buttonContainerStyle={{ marginTop: 16, marginBottom: 12 }}
                    /> */}
        </View>
      </View>
    );
  };

  const renderDialog = ({ navigation }) => {
    return (
      <View>
        <View>
          <Dialog
            onDismiss={() => {
              setDefaultSignIn(false);
            }}
            visible={defaultSignIn}
          >
            <DialogContent>
              <SignIn
                navigation={navigation}
                isLogin={(login) => {
                  login = true
                    ? setDefaultSignIn(false)
                    : setDefaultSignIn(true);
                }}
              />
            </DialogContent>
          </Dialog>
        </View>
        <View>
          <Dialog
            onDismiss={() => {
              setDefaultSignUp(false);
            }}
            visible={defaultSignUp}
          >
            <DialogContent>
              <SignUp
                navigation={navigation}
                isLogin={(login) => {
                  login = true
                    ? setDefaultSignUp(false)
                    : setDefaultSignUp(true);
                }}
              />
            </DialogContent>
          </Dialog>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar style="light" />
      {/* Header/ */}
      {renderHeader()}
      {/* Detail */}
      {renderDetail()}
      {/* Dialog */}
      {renderDialog({ navigation })}
    </View>
  );
};

export default Login;
