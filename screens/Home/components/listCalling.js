import { Layout } from "../../../components/layout";

import React, { useState, useEffect, useContext } from "react";
import { Box, FlatList, Stack, Image } from "native-base";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";

import Svg, { Path } from "react-native-svg";
import { Fontisto } from "@expo/vector-icons";

import { transliterateChar } from "../../../plugins/helpers";
import { SIZES, COLORS, images } from "../../../constants";

//dump data
import ListClinic from "../../../dump/clinic";
import { StatusBar } from "expo-status-bar";

//Popup-UI
import Root from "../../../components/popup-ui/Root";
import Popup from "../../../components/popup-ui/Popup";

import * as rn from "react-native";

//Service
//Function Library
import Helper from "../../../plugins/helpers";

export default function SelectHospital({ navigation, route }) {
  //   const bookingContextData = useContext(BookingContext);
  //   const { dispatchBooking } = bookingContextData;
  const [listHospital, setListHospital] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchClinic, setSearchClinic] = useState("");

  async function getListUser() {
    //Handle API
    var result = await fetch(
      "http://118.69.43.145:2013/api/App/Clinic/Search",
      {
        method: "GET",
        headers: await Helper.getDefaultRequestHeaders(),
        query: {
          keySearch: searchClinic,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      });

    setListHospital(result.items);
    console.log(result);
    setTimeout(function () {
      setIsLoading(false);
    }, 500);
  }
  useEffect(() => {
    setListHospital(ListClinic);
    getListUser();
    return () => {
      setListHospital(""); //clean the state
    };
  }, []);

  const renderClinic = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("aaaaa");
          Popup.show({
            type: "Warning",
            title: "Xác nhận",
            textBody: "Xác nhận gọi " + item.brandName + "?",
            button: true,
            buttonText: "Quay lại",
            button1: true,
            buttonText1: "Đồng ý",
            callback: () => {
              Popup.hide();
            },
            callback1: () => {
              Popup.hide();
              navigation.navigate("Calling", {
                item,
              });
            },
          });
        }}
      >
        <View style={[styles.container]}>
          <View style={styles.rectangle1}>
            <View style={styles.rectangle2Row}>
              <Image
                height="100%"
                width="100%"
                source={{
                  uri:
                    item.userAdminAvatar ||
                    "https://thuocdantoc.vn/wp-content/uploads/2019/03/Benh-vien-mat-cao-thang-1.jpg",
                }}
                resizeMode="cover"
                alt="Background-img"
                style={styles.rectangleImage}
              />
              <View style={styles.InfoColumn}>
                <Text style={styles.fullName}>{item.brandName}</Text>
                <Text style={styles.phone}>{item.description}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const searchingComponent = () => (
    <View
      height={SIZES.height / 6}
      width="100%"
      px={2}
      py={3}
      style={{ marginTop: -60 }}
      alignItems="center"
      direction="row"
      justifyContent="space-between"
    >
      <StatusBar style="dark" />

      <View style={styles.rectangle}>
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
          Địa điểm
        </Text>

        {/* Search */}
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            marginTop: "10%",
            marginRight: "5%",
            marginLeft: "5%",
            height: 44,
          }}
        >
          <TextInput
            onChangeText={(text) => {
              setSearchClinic(text);
              getListUser();
            }}
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "transparent",
              backgroundColor: COLORS.gray2,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              paddingLeft: 10,
            }}
            placeholder="  Tìm kiếm"
          ></TextInput>
          <Fontisto
            name="search"
            style={{
              zIndex: 1,
              position: "absolute",
              right: 17,
              marginTop: 12,
            }}
            size={SIZES.width / 20}
            color={COLORS.orange}
          />
        </View>
      </View>
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
    setListHospital(newList);
  }

  return (
    <Root>
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
          <Box style={{ paddingBottom: 110 }}>
            {listHospital != null ? (
              <FlatList
                data={listHospital}
                keyExtractor={(item) => String(item.clinicID)}
                renderItem={renderClinic}
              />
            ) : null}
          </Box>
        )}
      </Layout>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonCancel: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
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
    fontSize: 16,
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
    top: 8,
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
