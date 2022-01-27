import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconsTime from "./IconsTime";
import IconsPhone from "./IconsPhone";

function Row4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardAdvisoryList}>
        <View style={styles.rectangle96}>
          <View style={styles.rectangle97Row}>
            <View style={styles.rectangle97}>
              <Svg viewBox="0 0 12 12" style={styles.oval25}>
                <Path
                  strokeWidth={0}
                  fill="rgba(112,198,96,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M6.00 12.00 C9.31 12.00 12.00 9.31 12.00 6.00 C12.00 2.69 9.31 0.00 6.00 0.00 C2.69 0.00 0.00 2.69 0.00 6.00 C0.00 9.31 2.69 12.00 6.00 12.00 Z"
                ></Path>
              </Svg>
            </View>
            <View style={styles.drChikansoChima3Column}>
              <Text style={styles.drChikansoChima3}>Dr. Chikanso Chima</Text>
              <Text style={styles.theConsultationHas}>
                The consultation has not yet started!
              </Text>
              <View style={styles.iconsTime2Row}>
                <IconsTime style={styles.iconsTime2}></IconsTime>
                <Text style={styles.am2}>09:30 Am</Text>
                <View style={styles.rectangle98}>
                  <View style={styles.iconsPhoneRow}>
                    <IconsPhone style={styles.iconsPhone}></IconsPhone>
                    <Text style={styles.finished}>Finished</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardAdvisoryList: {
    height: 108,
    width: 327
  },
  rectangle96: {
    height: 108,
    width: 327,
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rectangle97: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: "rgba(116,127,158,1)"
  },
  oval25: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 80
  },
  drChikansoChima3: {
    backgroundColor: "transparent",
    lineHeight: 24,
    color: "rgba(38,44,61,1)",
    fontSize: 16
  },
  theConsultationHas: {
    height: 40,
    width: 183,
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginTop: 4
  },
  iconsTime2: {
    height: 14,
    width: 14,
    backgroundColor: "transparent",
    marginTop: 4
  },
  am2: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(176,179,199,1)",
    fontSize: 12,
    marginLeft: 8,
    marginTop: 2
  },
  rectangle98: {
    height: 20,
    width: 78,
    borderRadius: 6,
    backgroundColor: "rgba(255,109,109,0.2009146554129464)",
    flexDirection: "row",
    marginLeft: 45
  },
  iconsPhone: {
    height: 12,
    width: 12,
    backgroundColor: "transparent",
    marginTop: 4
  },
  finished: {
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(255,111,91,1)",
    fontSize: 12,
    marginLeft: 4
  },
  iconsPhoneRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    marginLeft: 8
  },
  iconsTime2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 4
  },
  drChikansoChima3Column: {
    width: 195,
    marginLeft: 16
  },
  rectangle97Row: {
    height: 92,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 16
  }
});

export default Row4;
