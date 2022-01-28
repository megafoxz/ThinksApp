import React from "react";
import { Box, Text, HStack, Center } from "native-base";
import ScalableText from "react-native-text";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
} from "react-native";
import { images } from "../../../constants";
import { flex } from "styled-system";

export default function menu({ navigation }) {
  const listMenu = [
    [
      {
        text: `Thông tin phòng khám`,
        icon: () => (
          <Image
            source={images.newrecord}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        routeName: "ListClinic",
      },
      {
        text: "Gọi cho Cao Thắng",
        icon: () => (
          <Image
            source={images.chat}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        routeName: "ListHotline",
      },
      {
        text: "Tin tức về mắt",
        icon: () => (
          <Image
            source={images.newspaper}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        ),
        routeName: "ListNew",
      },
    ],
  ];

  return (
    <Box>
      <ScalableText adjustsFontSizeToFit style={styles.MyTasksTitle}>
        My Tasks
      </ScalableText>
      {listMenu.map((item, index) => (
        <HStack
          direction={"row"}
          space={2}
          justifyContent="space-around"
          key={index}
          p={2}
          style={{
            alignItems: "center",
            paddingRight: "2%",
            paddingLeft: "2%",
          }}
        >
          {item.length ? (
            item.map((child, indexC) => (
              <TouchableOpacity
                key={indexC}
                style={[styles.container]}
                onPress={() => {
                  navigation.push(child.routeName);
                }}
              >
                <View style={styles.rectangle11}>
                  <View style={styles.oval6StackStackRow}>
                    <View style={styles.oval6StackStack}>
                      <View style={styles.oval6Stack}>{child.icon()}</View>
                    </View>
                  </View>
                  <ScalableText
                    adjustsFontSizeToFit
                    style={styles.generalCheckUp}
                  >
                    {child.text}
                  </ScalableText>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <></>
          )}
        </HStack>
      ))}
    </Box>
  );
}

const styles = StyleSheet.create({
  MyTasksTitle: {
    backgroundColor: "transparent",
    lineHeight: 27,
    color: "rgba(38,44,61,1)",
    fontSize: 24,
    marginTop: 22,
    marginLeft: 25,
    fontWeight: "bold",
  },
  card1: {
    height: 136,
    width: 98,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    zIndex: 0,
  },
  cardLookingFor: {
    height: 136,
    width: 98,
  },
  rectangle11: {
    height: 136,
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
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
  oval6: {
    position: "absolute",
    height: 60,
    width: 20,
    top: 29,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  iconsMedicalHistory2: {
    position: "absolute",
    top: 0,
    left: 7,
    height: 48,
    width: 48,
    backgroundColor: "transparent",
  },
  oval6Stack: {
    top: 2,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  oval8: {
    position: "absolute",
    height: 4,
    width: 4,
    top: 8,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  oval9: {
    position: "absolute",
    height: 12,
    width: 12,
    top: 0,
    left: 41,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  oval6StackStack: {
    width: 55,
    height: 51,
    overflow: "hidden",
  },
  oval7: {
    height: 4,
    width: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 25,
  },
  oval6StackStackRow: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  generalCheckUp: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(38,44,61,1)",
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    width: "100%",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
