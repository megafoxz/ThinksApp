// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import CommonFonts from "./assets/fonts";
import { SIZES, FONTS, colors, spacing } from "./constants";
import AppLoading from "expo-app-loading";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreensRoute from "./navigation/screens";
import { NativeBaseProvider, extendTheme } from "native-base";
import { CommonProvider } from "./contexts/commonContext";

import AuthMiddleware from "./middlewares/authen";
import Login from "./screens/Login/Login";
import { AsyncStorage } from "react-native";

import { ApplicationAppHasLaunch } from "./plugins/setting";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts(CommonFonts);
  const [authen, setAuthen] = useState(false);
  const [hasLaunch, setHasLaunch] = useState(false);

  const getAuthen = () => {
    AuthMiddleware.IsAuthenticated().then((res) => {
      setAuthen(res);
      return;
    });
  };
  const defaultScreen = ScreensRoute.find((i) => i.primary).name;

  const theme = extendTheme({
    spacing,
    SIZES,
    FONTS,
    colors,
  });
  // for navigation
  const config = {
    dependencies: {
      "linear-gradient": require("expo-linear-gradient").LinearGradient,
    },
  };

  useEffect(() => {
    getAuthen();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <CommonProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={authen == true ? "OnBoarding" : defaultScreen}
            screenOptions={{
              headerShown: false,
            }}
          >
            {ScreensRoute.map((i) => (
              <Stack.Screen
                name={i.name}
                component={i.component}
                key={i.name}
                options={{
                  title: i.title,
                }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </CommonProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "MavenPro-Regular",
    fontWeight: "bold",
  },
});
