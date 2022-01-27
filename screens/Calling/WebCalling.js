import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, View, Text, Linking } from "react-native";
import * as Device from "expo-device";

import Helper from "../../plugins/helpers";
import { Camera } from "expo-camera";
import { Audio } from "expo-av";
import { SIZES } from "../../constants";

function App({ route }) {
  const [roomToken, setRoomToken] = useState("1");
  const [osName, setOsName] = useState("");
  const { item } = route.params;

  async function getAccessToken() {
    var roomName = item.brandName.replace(/\s+/g, "");
    //Handle API
    var result = await fetch(
      `http://118.69.43.145:2013/api/Twilio/CallSingleHotline/${roomName}`,
      {
        method: "GET",
        headers: await Helper.getDefaultRequestHeaders(),
        query: {},
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.errorName) {
          console.log("API Error");
          console.log(roomToken);
        } else {
          setRoomToken(response.token);
        }
      });

    if (osName == "iOS") {
      if (roomToken) {
        const uri = `https://twilio-video-call-ejs.herokuapp.com/?token=${roomToken}`;
        console.log(uri);
        Linking.openURL(uri).catch((err) =>
          console.error("Couldn't load page", err)
        );
      }
    }
  }

  React.useEffect(() => {
    // const GetPermissions = async () => {
    //   try {
    //     console.log("Requesting permissions..");
    //     const CameraPerm = await Camera.requestPermissionsAsync();
    //     if (CameraPerm.status === "granted") {
    //       console.log("Camera Permission Granted");
    //     }

    //     const AudioPerm = await Audio.requestPermissionsAsync();
    //     if (AudioPerm.status === "granted") {
    //       console.log("Audio Permission Granted");
    //     }
    //     if (CameraPerm.status === "granted" && AudioPerm.status === "granted") {
    //       setShowWebView(true);
    //     }
    //   } catch (err) {
    //     console.error("Failed to get permissions", err);
    //   }
    // };

    // GetPermissions();

    getAccessToken();
    console.log(Device.osName);
    setOsName(Device.osName);
    return () => {
      setRoomToken("");
      setOsName("");
    };
    //Clean value
  }, []);

  if (osName == "Android") {
    return (
      <WebView
        originWhitelist={["*"]}
        allowsInlineMediaPlayback
        javaScriptEnabled
        bounces={true}
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState
        javaScriptEnabledAndroid
        javaScriptEnabled={true}
        useWebkit
        style={{ flex: 1, height: SIZES.height, width: SIZES.width }}
        source={{
          uri: `https://twilio-video-call-ejs.herokuapp.com/?token=${roomToken}`,
        }}
      />
    );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
