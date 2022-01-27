import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconsBack from "./IconsBack";
import IconsConversation from "./IconsConversation";
import IconsReport from "./IconsReport";
import ButtonsPrimaryDefault from "./ButtonsPrimaryDefault";
import IconsTag from "./IconsTag";
import Divider1 from "./Divider1";

function Card2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardService}>
        <View style={styles.rectangle18Stack}>
          <Svg viewBox="0 0 327 324" style={styles.rectangle18}>
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M311.00 0.00 C311.00 0.00 327.00 0.00 327.00 16.00 C327.00 16.00 327.00 224.00 327.00 224.00 C320.37 224.00 315.00 229.37 315.00 236.00 C315.00 242.63 320.37 248.00 327.00 248.00 C327.00 248.00 327.00 308.00 327.00 308.00 C327.00 308.00 327.00 324.00 311.00 324.00 C311.00 324.00 16.00 324.00 16.00 324.00 C16.00 324.00 0.00 324.00 0.00 308.00 C0.00 308.00 0.00 247.96 0.00 247.96 C0.33 247.99 0.66 248.00 1.00 248.00 C7.63 248.00 13.00 242.63 13.00 236.00 C13.00 229.37 7.63 224.00 1.00 224.00 C0.66 224.00 0.33 224.01 0.00 224.04 C0.00 224.04 0.00 16.00 0.00 16.00 C0.00 16.00 0.00 0.00 16.00 0.00 Z"
            ></Path>
          </Svg>
          <View style={styles.rectangle19}></View>
          <Text style={styles.drChikansoChima2}>Dr. Chikanso Chima</Text>
          <Text style={styles.bloodFormulaDetec}>
            Blood formula: Detecting {"\n"}anemia, blood disorders,.
          </Text>
          <Text style={styles.more}>more</Text>
          <View style={styles.rectangle20}>
            <Text style={styles.anyGender}>Any Gender</Text>
          </View>
          <IconsBack style={styles.iconsBack4}></IconsBack>
          <View style={styles.rectangle21}>
            <Text style={styles.anyAge}>Any Age</Text>
          </View>
          <IconsBack style={styles.iconsBack5}></IconsBack>
          <View style={styles.rectangle22}>
            <Text style={styles.test}>13 Test</Text>
          </View>
          <View style={styles.alarm}>
            <View style={styles.rectangle23}>
              <IconsConversation
                style={styles.iconsConversation4}
              ></IconsConversation>
            </View>
          </View>
          <View style={styles.rectangle24}>
            <Text style={styles.categoriesCheckU}>4 Categories check-up</Text>
          </View>
          <View style={styles.alarm1}>
            <View style={styles.rectangle25}>
              <IconsReport style={styles.iconsReport}></IconsReport>
            </View>
          </View>
          <ButtonsPrimaryDefault
            style={styles.buttonsPrimaryDefault}
          ></ButtonsPrimaryDefault>
          <IconsTag style={styles.iconsTag}></IconsTag>
          <Text style={styles.price}>Price:</Text>
          <Text style={styles.style2}>$ 1200</Text>
          <Divider1 style={styles.divider1}></Divider1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardService: {
    height: 346,
    width: 327
  },
  rectangle18: {
    position: "absolute",
    height: 324,
    width: 327,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle19: {
    position: "absolute",
    top: 8,
    left: 8,
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)"
  },
  drChikansoChima2: {
    position: "absolute",
    top: 15,
    left: 116,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  bloodFormulaDetec: {
    position: "absolute",
    top: 43,
    left: 116,
    height: 44,
    width: 177,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14
  },
  more: {
    position: "absolute",
    top: 66,
    left: 278,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(255,163,123,1)",
    fontSize: 14
  },
  rectangle20: {
    position: "absolute",
    top: 124,
    left: 8,
    height: 34,
    width: 134,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  anyGender: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 56
  },
  iconsBack4: {
    position: "absolute",
    top: 112,
    left: 20,
    height: 36,
    width: 36,
    backgroundColor: "transparent"
  },
  rectangle21: {
    position: "absolute",
    top: 124,
    left: 150,
    height: 34,
    width: 115,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  anyAge: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 56
  },
  iconsBack5: {
    position: "absolute",
    top: 112,
    left: 162,
    height: 36,
    width: 36,
    backgroundColor: "transparent"
  },
  rectangle22: {
    position: "absolute",
    top: 178,
    left: 8,
    height: 34,
    width: 107,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  test: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 56
  },
  alarm: {
    position: "absolute",
    top: 166,
    left: 20,
    height: 36,
    width: 36
  },
  rectangle23: {
    height: 36,
    width: 36,
    borderRadius: 10,
    backgroundColor: "rgba(57,154,169,0.2)"
  },
  iconsConversation4: {
    height: 18,
    width: 18,
    backgroundColor: "transparent",
    marginTop: 9,
    marginLeft: 9
  },
  rectangle24: {
    position: "absolute",
    top: 178,
    left: 123,
    height: 34,
    width: 190,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  categoriesCheckU: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 56
  },
  alarm1: {
    position: "absolute",
    top: 166,
    left: 135,
    height: 36,
    width: 36
  },
  rectangle25: {
    height: 36,
    width: 36,
    borderRadius: 10,
    backgroundColor: "rgba(244,176,72,0.2)"
  },
  iconsReport: {
    height: 18,
    width: 18,
    backgroundColor: "transparent",
    marginTop: 9,
    marginLeft: 9
  },
  buttonsPrimaryDefault: {
    position: "absolute",
    top: 302,
    left: 15,
    height: 44,
    width: 297,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 5,
      width: 4
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: "transparent"
  },
  iconsTag: {
    position: "absolute",
    top: 264,
    left: 16,
    height: 18,
    width: 18,
    backgroundColor: "transparent"
  },
  price: {
    position: "absolute",
    top: 261,
    left: 42,
    height: 24,
    width: 47,
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(116,127,158,1)",
    fontSize: 16
  },
  style2: {
    position: "absolute",
    top: 259,
    left: 245,
    backgroundColor: "transparent",
    lineHeight: 32,
    textAlign: "right",
    color: "rgba(255,163,123,1)",
    fontSize: 20
  },
  divider1: {
    position: "absolute",
    top: 236,
    left: 14,
    height: 1,
    width: 300,
    backgroundColor: "transparent"
  },
  rectangle18Stack: {
    width: 327,
    height: 346
  }
});

export default Card2;
