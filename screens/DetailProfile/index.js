import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import SkeletonContent from "react-native-skeleton-content";
import * as Device from "expo-device";

import moment from "moment";
import ScalableText from "react-native-text";

import { Fontisto } from "@expo/vector-icons";
import Avatar from "../../components/common/Avatar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import { AsyncStorage } from "react-native";
import { ApplicationPhoneNumberVerified } from "../../plugins/setting";

//Library Function
import firebase from "../../service/firebase";
import {
  ApplicationCookieTokenIDName,
  ApplicationLocalStorageUserDataName,
} from "../../plugins/setting";
import Helper from "../../plugins/helpers";
import * as rn from "react-native";

import * as ImagePicker from "expo-image-picker";

//Constant
import { images, COLORS, FONTS, SIZES } from "../../constants";

//Popup-UI
import Root from "../../components/popup-ui/Root";
import Toast from "../../components/popup-ui/Toast";

const getPhoneNumber = async () => {
  let phone = await AsyncStorage.getItem(ApplicationPhoneNumberVerified);
  return JSON.parse(phone);
};

function DetailProfile({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [genderType, setGenderType] = useState(1);
  const [avatar, setAvatar] = useState(
    "https://www.vippng.com/png/detail/412-4125354_person-circle-comments-profile-icon-png-white-transparent.png"
  );
  const [dateValue, setDateValue] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState("false");
  const [isLoadingInfo, setIsLoadingInfo] = useState("false");

  const [osName, setOsName] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateValue(date);
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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(pickerResult);

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
    //Handle API
    const body = {
      fullName: fullName,
      dob: dateValue,
      avatar: avatar,
      genderType: genderType,
      address: address,
    };

    // console.log(body);

    //handle register
    var result = await fetch(
      "http://118.69.43.145:2013/api/App/UpdateProfile",
      {
        method: "POST",
        headers: await Helper.getDefaultRequestHeaders(),
        query: {},
        body: JSON.stringify(body),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      });

    AsyncStorage.setItem(
      ApplicationLocalStorageUserDataName,
      JSON.stringify(body)
    );

    rn.Alert.alert("Lưu thông tin thành công!");
    // Toast.show({
    //   title: "Thành Công",
    //   text: "Thay đổi thông tin thành công.",
    //   color: "#2ecc71",
    // });

    console.log(result);
  };

  React.useEffect(() => {
    console.log(Device.osName);
    setOsName(Device.osName);
    async function getUserProfile() {
      //Handle API
      const authData = JSON.parse(
        await AsyncStorage.getItem(ApplicationLocalStorageUserDataName)
      );
      console.log(await AsyncStorage.getItem(ApplicationCookieTokenIDName));

      setIsLoadingInfo(true);

      setFullName(authData.fullName);
      setAddress(authData.address);
      setGenderType(authData.genderType);
      setAvatar(authData.avatar);
      setDateValue(authData.dob);
      setPhoneNumber(authData.phoneNumber);
      setTimeout(function () {
        setIsLoadingInfo(false);
      }, 1000);
    }

    getUserProfile();
    //Clean value
  }, []);

  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <Root style={{ zIndex: 1 }}>
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
          <View
            style={{
              position: "absolute",
              top: osName == "Android" ? -30 : 0,
              left: 0,
              height: SIZES.height / 3,
              width: "100%",
              borderBottomRightRadius: 36,
              borderBottomLeftRadius: 36,
              backgroundColor: "rgba(255,163,123,1)",
              elevation: 3,
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                width: 30,
                marginLeft: "5%",
                height: 40,
                top: osName == "Android" ? 60 : 60,
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
                top: 65,
                width: "100%",
                textAlign: "center",
                marginBottom: "20%",
              }}
            >
              Thông tin cá nhân
            </ScalableText>
          </View>
          {/* Avatar */}
          <View
            style={{
              position: "absolute",
              top: osName == "Android" ? 150 : 166,
              height: osName == "Android" ? 550 : 600,
              width: "90%",
              marginRight: "5%",
              marginLeft: "5%",
              borderRadius: 16,
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
            }}
          >
            <View>
              <SkeletonContent
                containerStyle={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                }}
                isLoading={isLoadingInfo}
              >
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
                    borderRadius: 100,
                    marginTop: -50,
                  }}
                />
              </SkeletonContent>

              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 0,
                  padding: 10,
                  borderColor: COLORS.black,
                  marginLeft: 70,
                  borderRadius: 100,
                  backgroundColor: COLORS.white,
                  shadowColor: "rgba(0,0,0,0.2)",
                  shadowOffset: {
                    height: 6,
                    width: 5,
                  },
                  shadowRadius: 18,
                  shadowOpacity: 1,
                  elevation: 3,
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
                value={fullName}
                placeholder="  Nhập họ và tên..."
              />
              {/* Gender */}
              <ScalableText style={styles.title}>Giới tính</ScalableText>
              <View
                style={{
                  height: 44,
                  borderWidth: 1,
                  borderColor: "rgba(116,127,158,1)",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  justifyContent: "center",
                  paddingLeft: 10,
                  marginBottom: "8%",
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
                    paddingLeft: 10,
                    borderColor: "rgba(116,127,158,1)",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    marginBottom: "8%",
                    justifyContent: "center",
                    paddingLeft: 10,
                  }}
                >
                  <ScalableText
                    style={{
                      color: COLORS.black,
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
                value={address}
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
      </Root>

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
    height: "100%",
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
    elevation: 3,
  },
  avatar: {
    height: 100,
    width: 100,
    marginTop: -50,
  },
  rectangle1: {
    position: "absolute",
    top: 166,
    height: 600,
    width: "90%",
    marginRight: "5%",
    marginLeft: "5%",
    borderRadius: 16,
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
    width: SIZES.width,
    height: SIZES.height,
  },
});

export default DetailProfile;
