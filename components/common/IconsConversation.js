import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function IconsConversation(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Svg viewBox="0 0 20.38 20.41" style={styles.path16}>
        <Path
          strokeWidth={0}
          fill="rgba(176,179,199,1)"
          fillOpacity={1}
          strokeOpacity={1}
          d="M12.72 4.62 C12.72 4.96 12.10 5.24 12.10 5.24 L4.60 5.24 C4.60 5.24 3.97 4.96 3.97 4.62 C3.97 4.27 4.60 3.99 4.60 3.99 L12.10 3.99 C12.10 3.99 12.72 4.27 12.72 4.62 Z M10.22 7.12 C10.22 7.46 9.60 7.74 9.60 7.74 L4.60 7.74 C4.60 7.74 3.97 7.46 3.97 7.12 C3.97 6.77 4.60 6.49 4.60 6.49 L9.60 6.49 C9.60 6.49 10.22 6.77 10.22 7.12 Z M0.00 0.00 L0.00 0.00 M20.38 7.74 L20.37 19.79 C20.37 19.79 20.24 20.25 20.02 20.35 C19.93 20.39 19.69 20.41 19.60 20.41 C19.46 20.41 19.21 20.28 19.21 20.28 L16.23 17.91 L7.70 17.91 L5.02 15.24 L5.02 14.62 C5.02 14.62 5.41 13.96 5.76 13.96 C6.10 13.96 6.47 14.62 6.47 14.62 L6.47 15.24 L7.72 16.49 L16.47 16.49 L16.86 16.63 L18.97 18.32 L18.97 7.74 C18.97 7.74 18.41 6.49 17.72 6.49 C17.38 6.49 17.10 6.09 17.10 5.74 C17.10 5.40 17.38 5.11 17.72 5.11 C19.32 5.11 20.38 7.74 20.38 7.74 Z"
        ></Path>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  path16: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 2
  }
});

export default IconsConversation;
