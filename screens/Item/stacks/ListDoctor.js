import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../../components/layout";
import {
  Box,
  Text,
  Tabs,
  FlatList,
  Stack,
  HStack,
  VStack,
  Heading,
  Image,
  Input,
} from "native-base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import ListPatient from "../../../dump/patient";
import { SIZES, COLORS, images } from "../../../constants";
import { Fontisto } from "@expo/vector-icons";

import { transliterateChar } from "../../../plugins/helpers";
import { BookingContext } from "../../../contexts/bookingContext";

import * as rn from "react-native";

//Service
import UserService from "../../../service/user";

export default function SelectHospital({ navigation, route }) {
  //   const bookingContextData = useContext(BookingContext);
  //   const { dispatchBooking } = bookingContextData;
  const [listPatient, setListPatient] = useState(null);
  const [searchClinic, setSearchClinic] = useState("");

  useEffect(() => {
    setListPatient(ListPatient);
    async function getListUser() {
      //Handle API
      var result = await UserService.getAllUserBaseOnClinic();
      if (result.errorName) {
        rn.Alert.alert("Invalid Login credentials!");
        return;
      }

      setListPatient(result);
    }
    getListUser();
  }, []);

  const renderClinic = ({ item }) => {
    return (
      <TouchableOpacity>
        {/* <Stack
          direction="row"
          space={1}
          alignItems="center"
          justifyContent="space-between"
          height={20}
        >
          <HStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            height="100%"
            p={2}
          >
            <Box width="80%" height="80%" borderRadius="full">
              <Image
                height="100%"
                width="100%"
                source={{
                  uri:
                    item.avatar ||
                    "https://cdn3.vectorstock.com/i/1000x1000/10/02/thin-purple-user-icon-purple-gradient-linear-sign-vector-23541002.jpg",
                }}
                resizeMode="cover"
                alt="Background-img"
              />
            </Box>
          </HStack>
          <VStack space={1} flex={3}>
            <Heading size="sm" isTruncated>
              {item.fullName}
            </Heading>
            <Text fontSize={SIZES.body4} color="warmGray.400" isTruncated>
              {item.phone}
            </Text>
          </VStack>
        </Stack> */}

        <View style={[styles.container]}>
          <View style={styles.rectangle1}>
            <View style={styles.rectangle2Row}>
              <Image
                height="100%"
                width="100%"
                source={{
                  uri:
                    item.avatar ||
                    "https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png",
                }}
                resizeMode="cover"
                alt="Background-img"
                style={styles.rectangleImage}
              />
              <View style={styles.InfoColumn}>
                <Text style={styles.fullName}>{item.fullName}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const searchingComponent = () => (
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
        <Text
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
          Doctor List
        </Text>

        <TouchableOpacity
          style={{
            position: "absolute",
            width: 30,
            marginLeft: "5%",
            height: 40,
            top: 3,
            right: 10,
            padding: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "rgba(255,246,242,1)",
          }}
          onPress={() => navigation.goBack()}
        >
          <Fontisto
            name="search"
            style={{
              alignItems: "center",
              textAlign: "center",
            }}
            size={SIZES.width / 17}
            color={COLORS.orange}
          />
        </TouchableOpacity>
      </View>

      <Text>{searchClinic}</Text>
    </Stack>
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
    setListPatient(newList);
  }

  return (
    <Layout bg={{ backgroundColor: "white" }} flex={1}>
      {searchingComponent()}
      <Box style={{ flex: 10 }}>
        {listPatient != null ? (
          <FlatList
            data={listPatient}
            keyExtractor={(item) => String(item.userID)}
            renderItem={renderClinic}
          />
        ) : null}
      </Box>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectangle1: {
    height: 108,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: 10,
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
  iconsStarRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
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
  km: {
    backgroundColor: "transparent",
    lineHeight: 18,
    textAlign: "center",
    color: "rgba(109,165,255,1)",
    fontSize: 12,
    marginLeft: 4,
  },
  iconsPinRow: {
    height: 18,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 12,
    marginTop: 1,
  },
  ratingRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
  },
  InfoColumn: {
    width: 195,
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6,
  },
  rectangle2Row: {
    height: 92,
    marginTop: 8,
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
  group5: {
    height: 74,
  },

  remeberMe: {
    height: 24,
    width: 118,
    flexDirection: "row",
  },

  remeberMe1: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginLeft: 12,
    marginTop: 2,
  },

  remeberMeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonsPrimaryDisabled: {
    position: "relative",
    height: 44,
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "transparent",
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
