import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../../components/layout";
import { Box, Text, FlatList, Stack, Image } from "native-base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import ListNews from "../../../dump/news";
import { SIZES, COLORS, images } from "../../../constants";
import { Fontisto } from "@expo/vector-icons";
import ScalableText from "react-native-text";

import { transliterateChar } from "../../../plugins/helpers";
import { BookingContext } from "../../../contexts/bookingContext";

import * as rn from "react-native";

//Service
import UserService from "../../../service/user";
import News from "../../../components/common/ListNews";

export default function SelectNews({ navigation, route }) {
  //   const bookingContextData = useContext(BookingContext);
  //   const { dispatchBooking } = bookingContextData;
  const [listNews, setListNews] = useState(null);
  const [searchClinic, setSearchClinic] = useState("");

  useEffect(() => {
    setListNews(ListNews);
    // async function getListUser() {
    //   //Handle API
    //   var result = await UserService.getAllUserBaseOnClinic();
    //   if (result.errorName) {
    //     rn.Alert.alert("Invalid Login credentials!");
    //     return;
    //   }

    //   setListHospital(result);
    // }
    // getListUser();
  }, []);

  const searchingComponent = () => (
    <View>
      <Stack
        height={SIZES.height / 15}
        width="100%"
        px={2}
        py={3}
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <View style={styles.rectangle}>
          <TouchableOpacity
            style={{
              zIndex: 1,
              position: "absolute",
              width: 30,
              marginLeft: "5%",
              height: 40,
              top: 3,
              padding: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: "rgba(255,246,242,1)",
              elevation: 3,
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
          <ScalableText
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
              position: "relative",
              top: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            Tin tức
          </ScalableText>
        </View>
      </Stack>
    </View>
  );

  return (
    <Layout bg={{ backgroundColor: "white" }} flex={1}>
      {searchingComponent()}
      <News navigation={navigation} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
