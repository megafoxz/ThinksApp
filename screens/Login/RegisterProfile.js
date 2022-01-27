import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";

import * as Device from "expo-device";

import moment from "moment";

import { Fontisto } from "@expo/vector-icons";
import Avatar from "../../components/common/Avatar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { AsyncStorage } from "react-native";
import {
  ApplicationPhoneNumberVerified,
  ApplicationCookieTokenIDName,
  ApplicationLocalStorageUserDataName,
} from "../../plugins/setting";

import firebase from "../../service/firebase";

import * as ImagePicker from "expo-image-picker";

//Constant
import { images, COLORS, FONTS, SIZES } from "../../constants";
import ScalableText from "react-native-text";

const getPhoneNumber = async () => {
  let phone = await AsyncStorage.getItem(ApplicationPhoneNumberVerified);
  return JSON.parse(phone);
};

function DetailProfile({ navigation, route }) {
  //Get phonenumber from verify screen
  const phoneNumber = route.params.phoneNumber;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [genderType, setGenderType] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [dateValue, setDateValue] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState("false");
  const [osName, setOsName] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateValue(date);
    console.log(dateValue);
    hideDatePicker();
  };

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });
    if (pickerResult.cancelled == true) {
      return;
    } else {
      setIsLoading(true);

      let localUri = pickerResult.uri;
      let filename = localUri.split("/").pop();

      var path = `patients/avatars/${filename}`;
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", localUri, true);
        xhr.send(null);
      });

      const ref = firebase.storage().ref().child(path);
      const snapshot = await ref.put(blob);

      // We're done with the blob, close and release it
      blob.close();
      var avatar = await snapshot.ref.getDownloadURL();
      console.log(avatar);
      setAvatar(avatar);
    }

    setIsLoading(false);
  };

  const handleSave = async () => {
    const body = {
      fullName: fullName,
      dob: dateValue,
      genderType: genderType,
      avatar: avatar,
      phoneNumber: phoneNumber,
      address: address,
    };

    console.log(body);
    //handle register
    var result = await fetch("http://118.69.43.145:2013/api/App/Register", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      query: {},
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      });

    //Save info in local storage
    await AsyncStorage.setItem(ApplicationCookieTokenIDName, result.tokenID);
    await AsyncStorage.setItem(
      ApplicationLocalStorageUserDataName,
      JSON.stringify(result.authData)
    );
    navigation.navigate("Home");
    console.log(result);
  };

  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {isLoading == true && (
          <View
            style={{
              flex: 1,
              height: "100%",
              width: SIZES.width,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
              backgroundColor: COLORS.transparentBlack9,
              position: "absolute",
              display: isLoading == true ? "flex" : "none",
              zIndex: 9999,
              elevation: 3,
            }}
          >
            <ActivityIndicator size="large" color={COLORS.orange} />
          </View>
        )}
        <View style={styles.rectangleStack}>
          <View style={styles.rectangle}>
            <TouchableOpacity
              style={{
                position: "absolute",
                width: 30,
                marginLeft: "5%",
                height: 40,
                top: osName == "Android" ? 40 : 66,
                padding: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: COLORS.white,
                borderColor: "rgba(116,127,158,1)",
                zIndex: 1,
                elevation: 3,
              }}
              onPress={() => navigation.goBack()}
            >
              <Fontisto
                name="angle-left"
                style={{
                  marginTop: 0,
                  alignItems: "center",
                  textAlign: "center",
                }}
                size={SIZES.width / 20}
                color={COLORS.orange}
              />
            </TouchableOpacity>
            <ScalableText
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#FFF",
                position: "relative",
                top: osName == "Android" ? 44 : 75,
                width: "100%",
                textAlign: "center",
                marginBottom: "20%",
              }}
            >
              Thông tin cá nhân
            </ScalableText>
          </View>
          {/* Avatar */}
          <View style={styles.rectangle1}>
            <View>
              <Image
                source={{
                  uri:
                    avatar ||
                    "https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png",
                }}
                resizeMode="cover"
                alt="Background-img"
                style={{
                  height: 100,
                  width: 100,
                  borderTopLeftRadius: 100,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopRightRadius: 100,
                  marginTop: -50,
                  shadowColor: "rgba(0,0,0,0.08)",
                  shadowOffset: {
                    height: 6,
                    width: 5,
                  },
                  shadowRadius: 50,
                  shadowOpacity: 1,
                }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 0,
                  padding: 10,
                  borderColor: COLORS.black,
                  marginLeft: 70,
                  elevation: 3,
                  backgroundColor: COLORS.white,
                  shadowColor: "rgba(0,0,0,0.2)",
                  shadowOffset: {
                    height: 6,
                    width: 5,
                  },
                  shadowRadius: 18,
                  shadowOpacity: 1,
                  borderTopLeftRadius: 50,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  borderTopRightRadius: 50,
                }}
                onPress={openImagePickerAsync}
              >
                <Fontisto
                  name="camera"
                  style={{
                    marginTop: 0,
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  size={SIZES.width / 20}
                  color={COLORS.orange}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.userInfo}>
              <ScalableText style={styles.title}>Họ và tên</ScalableText>
              <TextInput
                onChangeText={setFullName}
                style={{
                  height: 44,
                  borderWidth: 1,
                  paddingLeft: 10,
                  borderColor: "rgba(116,127,158,1)",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  marginBottom: "8%",
                }}
                placeholder="  Nhập họ và tên..."
              />
              {/* Gender */}
              <Text style={styles.title}>Giới tính</Text>
              <View
                style={{
                  height: 44,
                  borderWidth: 1,
                  borderColor: "rgba(116,127,158,1)",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  marginBottom: "8%",
                  justifyContent: "center", //Centered horizontally
                  flex: 1,
                  paddingLeft: 18,
                }}
              >
                <RNPickerSelect
                  onValueChange={setGenderType}
                  useNativeAndroidPickerStyle={false}
                  items={[
                    { label: "Nam", value: 1 },
                    { label: "Nữ", value: 2 },
                  ]}
                  style={{ inputAndroid: { color: "black" } }}
                  value={genderType}
                ></RNPickerSelect>
              </View>

              {/* Date of birth */}
              <ScalableText style={styles.title}>Ngày sinh </ScalableText>
              <TouchableOpacity style={{ zIndex: 1 }} onPress={showDatePicker}>
                <View
                  style={{
                    height: 44,
                    borderWidth: 1,
                    borderColor: "rgba(116,127,158,1)",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    marginBottom: "8%",
                    justifyContent: "center", //Centered horizontally
                    flex: 1,
                    paddingLeft: 18,
                  }}
                >
                  <ScalableText
                    style={{
                      color: "#ced5de",
                    }}
                  >
                    {dateValue != null
                      ? moment(dateValue).format("DD/MM/YYYY")
                      : "Nhấn vào để chọn..."}
                  </ScalableText>
                </View>
              </TouchableOpacity>

              {/* Address */}
              <ScalableText style={styles.title}>Địa chỉ</ScalableText>
              <TextInput
                onChangeText={setAddress}
                style={{
                  height: 44,
                  borderWidth: 1,
                  paddingLeft: 10,
                  borderColor: "rgba(116,127,158,1)",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  marginBottom: "8%",
                }}
                placeholder="  Nhập địa chỉ..."
              />

              {/* Save Button */}
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  bottom: 0,
                  height: 44,
                  width: "100%",
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                  backgroundColor: COLORS.orange,
                  elevation: 3,
                }}
                onPress={handleSave}
              >
                <ScalableText
                  style={{
                    ...FONTS.h4,
                    color: COLORS.white,
                    textAlign: "center",
                  }}
                >
                  Lưu
                </ScalableText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    top: 60,
    position: "absolute",
    width: "90%",
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: "5%",
  },
  title: {
    height: 16,
    backgroundColor: "transparent",
    lineHeight: 16,
    color: "rgba(116,127,158,1)",
    fontSize: 15,
    marginBottom: "2%",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "white",
  },
  rectangle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "40%",
    width: "100%",
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    backgroundColor: "rgba(255,163,123,1)",
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: -50,
  },
  rectangle1: {
    position: "absolute",
    top: 166,
    height: "70%",
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "rgba(0,0,0,0.08)",
    shadowOffset: {
      height: 6,
      width: 5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)",
    display: "flex",
    alignItems: "center",
    elevation: 3,
  },
  oval: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  iconsArCamera: {
    position: "absolute",
    top: 10,
    left: 10,
    height: 20,
    width: 20,
    backgroundColor: "transparent",
  },
  ovalStack: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 174,
  },

  buttonsPrimaryDisabled: {
    position: "absolute",
    top: 734,
    left: 40,
    height: 44,
    width: 295,
    backgroundColor: "transparent",
  },
  rectangleStack: {
    width: "100%",
    height: SIZES.height,
  },
});

export default DetailProfile;
