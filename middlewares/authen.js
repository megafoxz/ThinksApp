import { AsyncStorage } from "react-native";

const IsAuthenticated = async () => {
  const accessToken = await AsyncStorage.getItem("@HIS_APP_ACCESS_TOKEN");
  //console.log(accessToken);
  if (accessToken != null) {
    return true;
  }
  return false;
};

// const IsNotAuthenticated = () => {
//   var result = AsyncStorage.getItem("@HIS_APP_ACCESS_TOKEN");
//   console.warn(result);
//   if (!result) {
//     return true;
//   }
//   return false;
// };

export default {
  IsAuthenticated,
  //IsNotAuthenticated,
};
