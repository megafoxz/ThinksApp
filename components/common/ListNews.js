import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../layout";
import { Box, Text, FlatList, Stack, Image } from "native-base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import ListNews from "../../dump/news";
import { SIZES, COLORS, images } from "../../constants";
import { Fontisto } from "@expo/vector-icons";
import ScalableText from "react-native-text";

export default function SelectNews({ navigation, route }) {
  const [listNews, setListNews] = useState(ListNews);
  const [searchClinic, setSearchClinic] = useState("");

  // useEffect(() => {
  //   setListNews(ListNews);
  // }, []);
  const renderNews = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailNews", {
            item,
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
                    item.image ||
                    "https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png",
                }}
                resizeMode="cover"
                alt="Background-img"
                style={styles.rectangleImage}
              />
              <View style={styles.InfoColumn}>
                <ScalableText
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={styles.title}
                >
                  {item.heading}
                </ScalableText>
                <ScalableText style={styles.descritpion}>
                  {item.descritpion}
                </ScalableText>
                <View
                  style={{
                    flexDirection: "row",
                    bottom: 0,
                    marginTop: 6,
                    justifyContent: "space-between",
                  }}
                >
                  <ScalableText style={styles.subtitle}>
                    <Fontisto
                      name="calendar"
                      style={{
                        marginRight: 10,
                      }}
                      size={SIZES.width / 26}
                      color={COLORS.orange}
                    />
                    {"  "}
                    2020/09/08
                  </ScalableText>

                  <View
                    style={{
                      zIndex: 1,
                      padding: 5,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      backgroundColor: COLORS.lightBlue2,
                      marginTop: 5,
                    }}
                  >
                    <ScalableText
                      style={{
                        alignItems: "center",
                        color: COLORS.white,
                        fontSize: 13,
                      }}
                    >
                      News
                    </ScalableText>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Box>
      {listNews != null ? (
        <View>
          <FlatList
            data={listNews}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderNews}
            contentContainerStyle={{
              paddingBottom: 50,
            }}
          />
        </View>
      ) : null}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryTitle: {
    backgroundColor: "transparent",
    color: COLORS.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  rectangle1: {
    height: 108,
    marginRight: "5%",
    marginLeft: "5%",
    padding: 10,
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
    elevation: 3,
  },
  rectangleImage: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)",
  },
  title: {
    height: 20,
    width: SIZES.width - 180,
    backgroundColor: "transparent",
    lineHeight: 20,
    fontSize: 18,
    marginTop: 3,
    fontWeight: "bold",
  },
  descritpion: {
    height: 20,
    width: 200,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginTop: 3,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(176,179,199,1)",
    marginTop: 10,
  },

  rectangle3: {
    height: 20,
    width: 67,
    borderRadius: 6,
    backgroundColor: "rgba(217,231,255,1)",
    flexDirection: "row",
    marginLeft: 58,
  },

  ratingRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 12,
  },
  InfoColumn: {
    marginLeft: 16,
    marginTop: 7,
    marginBottom: 6,
  },
  rectangle2Row: {
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
});
