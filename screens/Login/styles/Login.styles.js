import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  slotG: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.orange,
    borderRadius: 10,
    height: 38,
    width: 38,
    elevation: 3,
    zIndex: 1,
  },
  slotF: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    height: 38,
    width: 38,
    elevation: 3,
    zIndex: 1,
  },
  rectangleIcon: {
    height: 38,
    width: 38,
    borderRadius: 10,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: SIZES.height / 3.5,
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    backgroundColor: "rgba(255,163,123,1)",
    right: 0,
    elevation: 3,
    zIndex: 0,
  },
  barsStatusBarIPhoneDark: {
    height: 44,
    backgroundColor: "transparent",
  },
  navigationBackWhite: {
    height: 40,
    backgroundColor: "transparent",
    marginTop: 12,
  },
  rectangle1: {
    position: "absolute",
    top: 160,
    height: 180,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    borderRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: COLORS.white,
    elevation: 3,
  },
  firstNameLastNa: {
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(116,127,158,1)",
    fontSize: 15,
    fontWeight: "bold",
    width: "90%",
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
  },
  rectangle28: {
    height: 44,
    borderWidth: 1,
    borderColor: "rgba(176,179,199,1)",
    borderRadius: 16,
    backgroundColor: "transparent",
    marginTop: 8,
  },
  group5: {
    height: 74,
  },
  textfieldsDefaulPlacehoder1Stack: {
    width: 295,
    height: 74,
    marginTop: 16,
    marginLeft: 16,
  },
  remeberMe: {
    height: 24,
    width: 118,
    flexDirection: "row",
  },
  iconsUncheckBox: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
  },
  remeberMe1: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 14,
    marginLeft: 12,
    marginTop: 2,
  },
  iconsUncheckBoxRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    marginRight: 4,
  },
  forgotPassword: {
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "right",
    color: "rgba(115,169,255,1)",
    fontSize: 14,
    marginLeft: 62,
    fontWeight: "bold",
    marginTop: 10,
    position: "relative",
    marginRight: "5%",
  },
  remeberMeRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonsPrimaryDisabled: {
    position: "relative",
    height: 44,
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "transparent",
  },
  rectangleStack: {
    height: 500,
  },
  text: {
    height: 21,
    width: "100%",
    flexDirection: "row",
    marginTop: 290,
    marginLeft: "18%",
    marginRight: "20%",
  },
  dontHaveAnAccoun: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(116,127,158,1)",
    fontSize: 15,
    fontWeight: "bold",
  },
  signUpNow: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(255,163,123,1)",
    fontSize: 15,
    marginLeft: 8,
    fontWeight: "bold",
  },
  dontHaveAnAccounRow: {
    height: 20,
    position: "relative",
    width: "100%",
    bottom: 40,
    flexDirection: "row",
    textAlign: "center",
  },
  text1: {
    position: "relative",
    height: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -450,
    marginRight: "20%",
    marginLeft: "25%",
  },
  line1: {
    height: 3,
    width: "20%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 8,
  },
  or: {
    backgroundColor: "transparent",
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(176,179,199,1)",
    fontSize: 14,
    marginLeft: 10,
  },
  line: {
    height: 3,
    width: "20%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 13,
    marginTop: 8,
    fontWeight: "bold",
  },
  line1Row: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: -2,
    marginTop: 1,
  },
  cardSpecialist: {
    height: 60,
    width: 155,
  },
  rectangle2: {
    position: "absolute",
    top: 18,
    left: 0,
    height: 42,
    right: 0,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 3,
  },
  orthopodist: {
    backgroundColor: "transparent",
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  iconsBack: {
    position: "absolute",
    top: 0,
    left: 12,
    height: 36,
    width: 36,
    backgroundColor: "transparent",
  },
  rectangle2Stack: {
    height: 60,
  },
  cardSpecialist1: {
    height: 60,
    width: 155,
    marginLeft: 16,
  },
  rectangle3: {
    position: "absolute",
    top: 18,
    left: 0,
    height: 42,
    right: 0,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 3,
  },
  orthopodist1: {
    backgroundColor: "transparent",
    lineHeight: 18,
    color: "rgba(116,127,158,1)",
    fontSize: 12,
    marginTop: 12,
    marginLeft: 60,
    marginRight: 39,
    fontWeight: "bold",
  },
  iconsBack1: {
    position: "relative",
    top: 0,
    left: 12,
    height: 36,
    width: 36,
    backgroundColor: "transparent",
  },
  rectangle3Stack: {
    height: 60,
  },
  cardSpecialistRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 24,
    marginRight: 25,
    justifyContent: "space-between",
  },
  barsHomeIndicatorIPhoneLightPortrait: {
    height: 34,
    backgroundColor: "transparent",
    marginTop: 202,
  },
  doctorInfomation: {
    height: 1353,
    width: 375,
    backgroundColor: "transparent",
    marginTop: 2224,
    marginLeft: -439,
  },
  textInput: {
    marginTop: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
});
