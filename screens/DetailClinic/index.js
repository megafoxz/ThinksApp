import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ScalableText from "react-native-text";

import moment from "moment";

import * as Device from "expo-device";

import RNPickerSelect from "react-native-picker-select";
import { Fontisto } from "@expo/vector-icons";
import Avatar from "../../components/common/Avatar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Constant
import { images, COLORS, FONTS, SIZES } from "../../constants";

function DetailProfile({ route, navigation }) {
  const { item } = route.params;
  const [osName, setOsName] = useState("");

  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);
    async function getNewsItem() {
      //Handle API
      console.log(item);
    }

    getNewsItem();
    //Clean value
  }, []);

  return (
    <SafeAreaView style={{ marginTop: -50, flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.rectangleStack}>
            <View
              style={{
                position: "absolute",
                top: osName == "Android" ? 30 : 0,
                left: 0,
                height: "30%",
                width: "100%",
                borderBottomRightRadius: 36,
                borderBottomLeftRadius: 36,
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  width: 30,
                  marginLeft: "5%",
                  height: 40,
                  top: 60,
                  padding: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: "rgba(255,246,242,1)",
                  borderColor: "rgba(116,127,158,1)",
                  zIndex: 1,
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
                adjustsFontSizeToFit
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: COLORS.black,
                  position: "relative",
                  top: 67,
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "20%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.brandName}
              </ScalableText>
            </View>
            {/* Avatar */}
            <View
              style={{
                position: "absolute",
                top: osName == "Android" ? 160 : 130,
                height: "60%",
                width: "90%",
                marginRight: "5%",
                marginLeft: "5%",
                borderRadius: 20,
                shadowColor: "rgba(0,0,0,0.1)",
                shadowOffset: {
                  height: 6,
                  width: 5,
                },
                shadowRadius: 18,
                shadowOpacity: 1,
                backgroundColor: "rgba(255,255,255,2)",
                display: "flex",
                alignItems: "center",
                elevation: 3,
              }}
            >
              <View style={styles.newsInfo}>
                {/* Title */}
                <View style={styles.rectangle2Row}>
                  <Image
                    height="100%"
                    width="100%"
                    source={{
                      uri: "https://thuocdantoc.vn/wp-content/uploads/2019/03/Benh-vien-mat-cao-thang-1.jpg",
                    }}
                    resizeMode="cover"
                    alt="Background-img"
                    style={styles.rectangleImage}
                  />
                  <View style={styles.InfoColumn}>
                    <ScalableText adjustsFontSizeToFit style={styles.title}>
                      {item.brandName}
                    </ScalableText>
                    <ScalableText
                      adjustsFontSizeToFit
                      style={styles.description}
                    >
                      Phòng khám thuộc hệ thống bệnh viện mắt Cao Thắng chuyên
                      về kiểm soát cận thị
                    </ScalableText>
                  </View>
                </View>
                {/* Ngày */}

                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 50,
                    marginLeft: 8,
                  }}
                >
                  <ScalableText style={{ fontSize: 20, fontWeight: "bold" }}>
                    Ngày mở cửa
                  </ScalableText>
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      bottom: 0,
                      marginTop: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      marginLeft: 8,
                    }}
                  >
                    <Fontisto
                      name="calendar"
                      size={SIZES.width / 20}
                      color={COLORS.orange}
                    />
                    <ScalableText adjustsFontSizeToFit style={styles.subtitle}>
                      Thứ hai đến thứ bảy
                    </ScalableText>
                  </View>
                </View>

                {/* Giờ */}
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    marginTop: 30,
                    marginLeft: 8,
                  }}
                >
                  <ScalableText style={{ fontSize: 20, fontWeight: "bold" }}>
                    Giờ mở cửa
                  </ScalableText>
                </View>
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      bottom: 0,
                      marginTop: 6,
                      display: "flex",
                      justifyContent: "flex-start",
                      marginLeft: 8,
                    }}
                  >
                    <Fontisto
                      name="clock"
                      size={SIZES.width / 20}
                      color={COLORS.orange}
                    />
                    <ScalableText adjustsFontSizeToFit style={styles.subtitle}>
                      8:00 đến 17:30
                    </ScalableText>
                  </View>
                </View>

                {/* Địa chỉ */}
                {item.description != "" && (
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 30,
                        marginLeft: 8,
                      }}
                    >
                      <ScalableText
                        adjustsFontSizeToFit
                        style={{ fontSize: 20, fontWeight: "bold" }}
                        adjustsFontSizeToFit
                      >
                        Địa chỉ
                      </ScalableText>
                    </View>
                    <View
                      style={{
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          bottom: 0,
                          marginTop: 6,
                          display: "flex",
                          justifyContent: "flex-start",
                          marginLeft: 8,
                        }}
                      >
                        <Fontisto
                          name="map"
                          size={SIZES.width / 20}
                          color={COLORS.orange}
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        />
                        <ScalableText
                          adjustsFontSizeToFit
                          style={styles.subtitle}
                        >
                          {item.description}
                        </ScalableText>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: "rgba(176,179,199,1)",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  InfoColumn: {
    width: 195,
    marginLeft: 16,
    marginTop: -2,
    marginBottom: 6,
  },
  rectangleImage: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)",
  },
  rectangle2Row: {
    height: 92,
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16,
    flexDirection: "row",
  },
  newsInfo: {
    position: "absolute",
    marginTop: "5%",
  },
  title: {
    backgroundColor: "transparent",
    color: COLORS.black,
    fontSize: 20,
    marginBottom: "3%",
    fontWeight: "bold",
  },
  description: {
    backgroundColor: "transparent",
    color: COLORS.gray,
    fontSize: 16,
    marginBottom: "5%",
  },
  subInfo: {
    backgroundColor: "transparent",
    color: COLORS.gray,
    fontSize: 18,
    marginBottom: "2%",
  },
  container: {
    backgroundColor: "white",
    height: SIZES.height * 1.1,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "30%",
    width: "100%",
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: -50,
  },
  rectangle1: {
    position: "absolute",
    top: 130,
    height: "60%",
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,2)",
    display: "flex",
    alignItems: "center",
    elevation: 3,
  },
  oval: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  iconsArCamera: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 20,
    width: 20,
    backgroundColor: "transparent",
  },
  ovalStack: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 174,
  },

  buttonsPrimaryDisabled: {
    position: "absolute",
    top: 734,
    left: 40,
    height: 44,
    width: 295,
    backgroundColor: "transparent",
  },
  rectangleStack: {
    width: SIZES.width,
    height: SIZES.height,
  },
});

export default DetailProfile;
