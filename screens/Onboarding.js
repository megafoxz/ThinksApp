import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import ScalableText from "react-native-text";

// constants
import { images } from "../constants";
const { onboarding1, onboarding2, onboarding3 } = images;

// theme
import { COLORS, FONTS, SIZES } from "../constants";

const onBoardings = [
  {
    title: "Quality reputation",
    description:
      "The team of reputable doctors has many years of professional experience.",
    img: onboarding1,
  },
  {
    title: "Online health check",
    description: "Easy and convenient online check-ups right from your home.",
    img: onboarding2,
  },
  {
    title: "Research, deep testing",
    description:
      "Ensure the most accurate results for the health of you and your family.",
    img: onboarding3,
  },
];

const OnBoarding = ({ navigation }) => {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render
  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: "90%",
                  height: "100%",
                  marginRight: "5%",
                  marginLeft: "5%",
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "20%",
                left: 40,
                right: 40,
              }}
            >
              <ScalableText
                adjustsFontSizeToFit
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                  textAlign: "center",
                }}
              >
                {item.title}
              </ScalableText>

              <ScalableText
                adjustsFontSizeToFit
                style={{
                  ...FONTS.body3,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                }}
              >
                {item.description}
              </ScalableText>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "relative",
                justifyContent: "center",
                display: "flex",
                bottom: 20,
                width: "90%",
                marginRight: "5%",
                marginLeft: "5%",
                height: 44,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 15,
                backgroundColor: COLORS.orange,
                elevation: 3,
              }}
              onPress={() => {
                navigation.navigate("Login", { name: "Login" });
              }}
            >
              <ScalableText
                adjustsFontSizeToFit
                style={{
                  ...FONTS.h5,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                {completed ? "Get Start !" : "Skip"}
              </ScalableText>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 12, SIZES.base],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  imageAndTextContainer: {
    marginTop: -100,
    width: SIZES.width,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "10%" : "16%",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -70,
    height: SIZES.height / 5.5,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.orange,
    marginHorizontal: SIZES.radius / 4,
  },
});

export default OnBoarding;
