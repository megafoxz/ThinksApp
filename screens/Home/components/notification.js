import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../../components/layout";
import { Box, Text, FlatList, Stack, Image } from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import ListNotification from "../../../dump/notification";
import { SIZES, COLORS, images } from "../../../constants";
import { Fontisto } from "@expo/vector-icons";

import { transliterateChar } from "../../../plugins/helpers";
import { BookingContext } from "../../../contexts/bookingContext";
import ScalableText from "react-native-text";

import * as rn from "react-native";

//Service
import UserService from "../../../service/user";

export default function SelectNotification({ navigation, route }) {
  //   const bookingContextData = useContext(BookingContext);
  //   const { dispatchBooking } = bookingContextData;
  const [listNotification, setListNotification] = useState(null);
  const [searchClinic, setSearchClinic] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setListNotification(ListNotification);
    setTimeout(function () {
      setIsLoading(false);
    }, 500);
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

  const renderNotification = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={[styles.container]}>
          <View style={styles.rectangle1}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("Notification");
              }}
              style={styles.notiIcon}
            >
              <Fontisto
                name="bell"
                style={{
                  marginTop: 12,
                  textAlign: "center",
                  alignItems: "center",
                }}
                size={SIZES.width / 17}
                color={COLORS.orange}
              />
            </TouchableOpacity>
            <View style={styles.rectangle2Row}>
              <View style={styles.InfoColumn}>
                <ScalableText style={styles.fullName}>
                  {item.brandName}
                </ScalableText>
                <ScalableText style={styles.phone}>
                  {item.description}
                </ScalableText>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const searchingComponent = () => (
    <View
      height={SIZES.height / 15}
      width="100%"
      px={2}
      py={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <View style={styles.rectangle}>
        <TouchableOpacity
          style={{
            zIndex: 1,
            position: "absolute",
            width: 30,
            marginLeft: "5%",
            height: 40,
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
          Thông báo
        </ScalableText>
      </View>

      <ScalableText>{searchClinic}</ScalableText>
    </View>
  );

  function searchClinicValid(val) {
    // filter
    let newList = ListPatient.filter((i) => {
      let name = transliterateChar(i.name.toLowerCase());
      let address = transliterateChar(i.address.toLowerCase());
      let keySearch = transliterateChar(val.toLowerCase());
      if (name.includes(keySearch) || address.includes(keySearch)) {
        return i;
      }
    });
    // update state
    setSearchClinic(val);
    setListNotification(newList);
  }

  return (
    <Layout bg={{ backgroundColor: "white" }} flex={1}>
      {searchingComponent()}
      {isLoading == true && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={COLORS.orange} />
        </View>
      )}
      {isLoading == false && (
        // <Box style={{ flex: 10 }}>
        //   {listNotification != null ? (
        //     <FlatList
        //       data={listNotification}
        //       keyExtractor={(item) => String(item.clinicID)}
        //       renderItem={renderNotification}
        //     />
        //   ) : null}
        // </Box>
        <View style={styles.rectangle404}>
          <Image
            source={images.notfound}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 200,
              marginTop: -100,
            }}
            alt="Background-img"
          />
          <ScalableText style={styles.maintainTitle}>
            Đừng lo lắng !
          </ScalableText>
          <ScalableText style={styles.maintainSubTitle}>
            Tính năng này đang được hoàn thiện!
          </ScalableText>

          {/* <TouchableOpacity
          style={{
            position: "absolute",
            justifyContent: "center",
            bottom: 10,
            width: "90%",
            marginTop: "5%",
            marginRight: "5%",
            marginLeft: "5%",
            height: 44,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: COLORS.orange,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              textAlign: "center",
              ...FONTS.h4,
            }}
          >
            Make an appointment
          </Text>
        </TouchableOpacity> */}
        </View>
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notiIcon: {
    zIndex: 1,
    height: 45,
    width: 45,
    marginLeft: 10,
    borderRadius: 10,
    left: 10,
    marginTop: -20,
    position: "absolute",
    backgroundColor: "rgba(255,246,242,1)",
  },
  rectangle1: {
    height: 108,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: 40,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  rectangleImage: {
    height: 92,
    width: 92,
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
  phone: {
    height: 20,
    width: 195,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 3,
  },
  rating: {
    height: 18,
    width: 70,
    flexDirection: "row",
    marginTop: 1,
  },
  iconsStar: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    marginTop: 1,
  },
  style: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginLeft: 4,
  },

  rectangle3: {
    height: 20,
    width: 67,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row",
    marginLeft: 58,
  },
  iconsPin: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 3,
  },

  InfoColumn: {
    width: "100%",
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6,
  },
  rectangle2Row: {
    height: 92,
    marginTop: 25,
    marginLeft: 8,
    marginRight: 16,
    flexDirection: "row",
  },

  rectangleIcon: {
    height: 38,
    width: 38,
    borderRadius: 10,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  rectangle28: {
    height: 44,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    marginTop: 8,
  },

  rectangle404: {
    position: "relative",
    top: SIZES.height / 5,
    left: 0,
    height: SIZES.height / 2.3,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 3,
  },

  maintainTitle: {
    width: "90%",
    backgroundColor: "transparent",
    lineHeight: 27,
    textAlign: "center",
    color: "rgba(38,44,61,1)",
    fontSize: 18,
    marginTop: 100,
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: "bold",
  },

  maintainSubTitle: {
    width: "90%",
    backgroundColor: "transparent",
    lineHeight: 24,
    textAlign: "center",
    color: "rgba(116,127,158,1)",
    fontSize: 16,
    marginTop: 12,
    marginLeft: "5%",
    marginRight: "5%",
    paddingBottom: 10,
  },
  rectangleStack: {
    height: 500,
  },
  text: {
    height: 21,
    width: "100%",
    flexDirection: "row",
    marginTop: 290,
    marginLeft: "18%",
    marginRight: "20%",
  },

  rectangle2: {
    position: "absolute",
    top: 18,
    left: 0,
    height: 42,
    right: 0,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  orthopodist: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 60,
    marginRight: 41,
  },
  iconsBack: {
    position: "absolute",
    top: 0,
    left: 12,
    height: 36,
    width: 36,
    backgroundColor: "transparent",
  },

  iconsBack1: {
    position: "relative",
    top: 0,
    left: 12,
    height: 36,
    width: 36,
    backgroundColor: "transparent",
  },
  rectangle3Stack: {
    height: 60,
  },
  cardSpecialistRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 24,
    marginRight: 25,
  },
});
