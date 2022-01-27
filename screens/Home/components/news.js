import React from "react";
import { Box, Heading, FlatList } from "native-base";
import { SIZES } from "../../../constants";
import NewsData from "../../../dump/news";
import DetailNew from "./detailNew";
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import ScalableText from "react-native-text";

export default function News({ navigation }) {
  const renderDetailNew = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailNews", {
          item,
        });
      }}
    >
      <DetailNew imageURL={item.image} heading={item.heading}></DetailNew>
    </TouchableOpacity>
  );

  return (
    <Box width={SIZES.width} p={2}>
      <ScalableText adjustsFontSizeToFit style={styles.newsTitle}>
        Tin tức
      </ScalableText>
      <SafeAreaView>
        <Box width={SIZES.width * 0.95} justifyContent="center" direction="row">
          <FlatList
            data={NewsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: SIZES.padding,
              paddingHorizontal: 15,
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderDetailNew}
          />
        </Box>
      </SafeAreaView>
    </Box>
  );
}

const styles = StyleSheet.create({
  newsTitle: {
    backgroundColor: "transparent",
    lineHeight: 27,
    color: "rgba(38,44,61,1)",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 15,
    fontWeight: "bold",
  },
});
