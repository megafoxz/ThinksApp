import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsWallet(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.wallet}>
        <Svg viewBox="0 0 24 24" style={styles.path167}>
          <Path
            strokeWidth={0}
            fill="rgba(116,127,158,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M22.13 12.05 L22.13 9.38 L20.25 7.50 L2.81 7.50 L1.88 7.34 L1.88 20.25 L3.75 22.13 L20.25 22.13 C20.25 22.13 21.77 21.61 22.03 20.84 C22.19 20.35 22.72 20.09 23.22 20.25 C23.71 20.42 23.97 20.95 23.81 21.44 C23.30 22.97 20.25 24.00 20.25 24.00 L3.75 24.00 L0.00 20.25 L0.00 4.45 C0.00 4.45 0.03 4.20 0.08 4.08 C0.37 2.85 2.81 1.92 2.81 1.92 L4.55 1.92 C4.55 1.92 5.48 2.34 5.48 2.86 C5.48 3.38 4.55 3.80 4.55 3.80 L2.81 3.80 C2.81 3.80 1.89 4.20 1.88 4.71 C1.89 5.22 2.81 5.63 2.81 5.63 L4.22 5.63 L13.26 0.14 C13.26 0.14 13.73 -0.03 13.97 0.03 C14.21 0.09 14.55 0.46 14.55 0.46 L15.61 2.26 L17.96 0.80 C17.96 0.80 18.43 0.62 18.67 0.68 C18.92 0.74 19.26 1.11 19.26 1.11 L22.45 6.34 L24.00 9.38 L24.00 16.73 C24.00 16.73 23.58 17.67 23.06 17.67 C23.05 17.67 23.03 17.67 23.02 17.67 C23.00 17.67 22.97 17.67 22.97 17.67 L18.98 17.67 C18.98 17.67 16.17 16.41 16.17 14.86 C16.17 13.31 18.98 12.05 18.98 12.05 Z M22.13 13.92 L18.98 13.92 C18.98 13.92 18.05 14.34 18.05 14.86 C18.05 15.38 18.98 15.80 18.98 15.80 L22.13 15.80 Z M15.42 5.63 L14.55 4.15 C14.55 4.15 14.50 4.09 14.48 4.06 C14.46 4.01 14.42 3.92 14.42 3.92 L13.42 2.23 L7.83 5.63 Z M19.82 5.63 L18.15 2.89 L16.56 3.87 L17.60 5.63 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wallet: {
    height: 24,
    width: 24
  },
  path167: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});

export default IconsWallet;
