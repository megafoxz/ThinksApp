import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsChat(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20 18.75" style={styles.oval4}>
        <Path
          strokeWidth={0}
          fill="rgba(109,165,255,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M6.48 0.39 C6.48 0.17 6.66 0.00 6.88 0.00 C7.09 0.00 7.27 0.17 7.27 0.39 C7.27 0.61 7.09 0.78 6.88 0.78 C6.66 0.78 6.48 0.61 6.48 0.39 Z M15.70 12.11 C15.70 11.89 15.88 11.72 16.09 11.72 C16.31 11.72 16.48 11.89 16.48 12.11 C16.48 12.33 16.31 12.50 16.09 12.50 C15.88 12.50 15.70 12.33 15.70 12.11 Z M13.36 12.11 C13.36 11.89 13.53 11.72 13.75 11.72 C13.97 11.72 14.14 11.89 14.14 12.11 C14.14 12.33 13.97 12.50 13.75 12.50 C13.53 12.50 13.36 12.33 13.36 12.11 Z M11.02 12.11 C11.02 11.89 11.19 11.72 11.41 11.72 C11.62 11.72 11.80 11.89 11.80 12.11 C11.80 12.33 11.62 12.50 11.41 12.50 C11.19 12.50 11.02 12.33 11.02 12.11 Z M0.00 0.00 L0.00 0.00 M0.00 0.00 L0.00 0.00 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  oval4: {
    height: 19,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 3,
    marginLeft: 2
  }
});

export default IconsChat;
