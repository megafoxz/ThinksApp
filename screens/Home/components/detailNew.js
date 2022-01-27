import React from "react";
import { Box, Image, Text, Heading, View } from "native-base";
import { ImageBackground } from "react-native";
import ScalableText from "react-native-text";

import { COLORS, SIZES } from "../../../constants";
export default function detailNew({ imageURL, heading }) {
  return (
    <Box shadow={1} rounded={"md"} width={SIZES.width * 0.6} mr={3}>
      <View
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={{ uri: imageURL }}
          imageStyle={{ opacity: 0.6 }}
          style={{
            height: SIZES.height / 4,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: COLORS.transparentBlack7,
            overflow: "hidden",
          }}
        ></ImageBackground>
      </View>

      <Heading
        position="absolute"
        bold
        color="white"
        bottom={2}
        m={[2, 4, 2]}
        size="sm"
      >
        {heading}
      </Heading>
    </Box>
  );
}
