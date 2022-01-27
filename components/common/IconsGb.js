import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsGb(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.gbStack}>
        <View style={styles.gb}>
          <View style={styles.rectangle63}>
            <View style={styles.clipped}>
              <View style={styles.rectangle64}>
                <View style={styles.group6}>
                  <View style={styles.rectangle65Stack}>
                    <View style={styles.rectangle65}>
                      <Svg viewBox="0 0 24 17" style={styles.path66}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(230,39,62,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 10.20 L10.29 10.20 L10.29 17.00 L13.71 17.00 L13.71 10.20 L24.00 10.20 L24.00 6.80 L13.71 6.80 L13.71 0.00 L10.29 0.00 L10.29 6.80 L0.00 6.80 Z"
                        ></Path>
                      </Svg>
                    </View>
                    <Svg viewBox="0 0 28.75 20.26" style={styles.path61}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.28 0.00 L11.52 6.85 L11.52 0.50 L17.23 0.50 L17.23 6.85 L27.48 0.00 L28.75 1.88 L20.66 7.30 L26.38 7.30 L26.38 12.96 L20.66 12.96 L28.75 18.38 L27.48 20.26 L17.23 13.41 L17.23 19.76 L11.52 19.76 L11.52 13.41 L1.28 20.26 L0.00 18.38 L8.10 12.96 L2.38 12.96 L2.38 7.30 L8.10 7.30 L0.00 1.88 L1.28 0.00 Z"
                      ></Path>
                    </Svg>
                    <Svg viewBox="-0.33 -0.33 12.19 8.42" style={styles.path62}>
                      <Path
                        strokeWidth={0.666667}
                        fill="transparent"
                        stroke="rgba(219,31,53,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 7.08 L10.86 0.00 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="-0.33 -0.33 11.07 7.84" style={styles.path63}>
                      <Path
                        strokeWidth={0.666667}
                        fill="transparent"
                        stroke="rgba(219,31,53,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M0.00 0.00 L9.73 6.50 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="-0.33 -0.33 11.48 8.12" style={styles.path64}>
                      <Path
                        strokeWidth={0.666667}
                        fill="transparent"
                        stroke="rgba(219,31,53,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M10.15 6.78 L0.00 0.00 "
                      ></Path>
                    </Svg>
                    <Svg viewBox="-0.33 -0.33 12.59 8.73" style={styles.path65}>
                      <Path
                        strokeWidth={0.666667}
                        fill="transparent"
                        stroke="rgba(219,31,53,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M11.25 0.00 L0.00 7.40 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectangle66}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gb: {
    position: "absolute",
    top: 3,
    left: 0,
    height: 17,
    width: 24
  },
  rectangle63: {
    height: 17,
    width: 24,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,1)"
  },
  clipped: {
    height: 17,
    width: 24
  },
  rectangle64: {
    height: 17,
    width: 24,
    borderRadius: 2,
    overflow: "hidden",
    backgroundColor: "transparent"
  },
  group6: {
    height: 21,
    width: 31,
    marginTop: -2,
    marginLeft: -3
  },
  rectangle65: {
    position: "absolute",
    top: 2,
    left: 3,
    height: 17,
    width: 24,
    backgroundColor: "rgba(10,23,167,1)"
  },
  path66: {
    height: 17,
    width: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path61: {
    position: "absolute",
    height: 20,
    width: 29,
    top: 0,
    left: 1,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path62: {
    position: "absolute",
    height: 8,
    width: 12,
    top: 0,
    left: 19,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path63: {
    position: "absolute",
    height: 8,
    width: 11,
    top: 13,
    left: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path64: {
    position: "absolute",
    height: 8,
    width: 11,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path65: {
    position: "absolute",
    height: 9,
    width: 13,
    top: 13,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rectangle65Stack: {
    width: 31,
    height: 22
  },
  rectangle66: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 24,
    width: 24,
    backgroundColor: "transparent"
  },
  gbStack: {
    width: 24,
    height: 24
  }
});

export default IconsGb;
