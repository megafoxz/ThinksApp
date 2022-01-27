import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function BarsStatusBarIPhoneLight(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <View style={styles.endWrapperFiller}></View>
        <View style={styles.cellularConnectionPathRow}>
          <Svg viewBox="0 0 17 10.67" style={styles.cellularConnectionPath}>
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M1.00 6.67 L0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M15.00 0.00 L14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 Z"
            ></Path>
          </Svg>
          <Svg viewBox="0 0 15.33 11" style={styles.wifiPath}>
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M7.67 2.28 C7.67 2.28 3.30 3.14 1.69 4.67 C1.57 4.79 1.25 4.67 1.25 4.67 L0.09 3.50 C0.09 3.50 -0.00 3.35 0.00 3.27 C0.00 3.18 0.04 3.10 0.10 3.04 C4.33 -1.01 11.00 -1.01 15.24 3.04 C15.30 3.10 15.33 3.18 15.33 3.27 C15.33 3.35 15.24 3.50 15.24 3.50 L14.08 4.67 C14.08 4.67 13.77 4.79 13.64 4.67 C12.03 3.14 7.67 2.28 7.67 2.28 Z M7.67 6.09 C7.67 6.09 5.27 6.55 4.36 7.37 C4.24 7.48 3.93 7.36 3.93 7.36 L2.77 6.19 C2.77 6.19 2.67 6.05 2.67 5.96 C2.67 5.87 2.71 5.79 2.77 5.73 C5.53 3.16 9.80 3.16 12.56 5.73 C12.63 5.79 12.66 5.87 12.66 5.96 C12.66 6.04 12.57 6.19 12.57 6.19 L11.41 7.36 C11.41 7.36 11.10 7.48 10.97 7.37 C10.07 6.55 7.67 6.09 7.67 6.09 Z M7.89 10.91 C7.89 10.91 7.75 11.00 7.67 11.00 C7.58 11.00 7.44 10.91 7.44 10.91 L5.44 8.89 C5.44 8.89 5.34 8.74 5.34 8.65 C5.35 8.57 5.38 8.48 5.45 8.43 C6.73 7.34 8.60 7.34 9.89 8.43 C9.95 8.48 9.99 8.57 9.99 8.65 C9.99 8.74 9.89 8.89 9.89 8.89 L7.89 10.91 Z"
            ></Path>
          </Svg>
          <View style={styles.battery}>
            <View style={styles.borderRow}>
              <View style={styles.border}>
                <View style={styles.capacity}></View>
              </View>
              <Svg viewBox="0 0 1.33 4" style={styles.cap}>
                <Path
                  strokeWidth={0}
                  fill="rgba(0,0,0,1)"
                  fillOpacity={0.4}
                  strokeOpacity={0.4}
                  d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 "
                ></Path>
              </Svg>
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
  rect: {
    height: 22,
    width: 340,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 21
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cellularConnectionPath: {
    height: 11,
    width: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5,
    marginTop: 1
  },
  wifiPath: {
    height: 11,
    width: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5
  },
  battery: {
    height: 12,
    width: 25,
    flexDirection: "row"
  },
  border: {
    height: 11,
    width: 22,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.35)",
    borderRadius: 2.666666746139526,
    backgroundColor: "transparent"
  },
  capacity: {
    height: 7,
    width: 18,
    borderRadius: 1.333333373069763,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2,
    marginLeft: 2
  },
  cap: {
    height: 4,
    width: 1,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 4
  },
  borderRow: {
    height: 11,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  cellularConnectionPathRow: {
    height: 12,
    flexDirection: "row",
    marginTop: 10
  }
});

export default BarsStatusBarIPhoneLight;
