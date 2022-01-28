import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { Layout } from "../../components/layout";

import { SIZES, images } from "../../constants";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FlatList } from "native-base";

// Component
import Header from "./components/header";
import Menu from "./components/menu";
import Schedule from "../Schedule/index";
import BookingList from "./components/bookingList";
import ListCalling from "./components/listCalling";
import UserProfile from "./components/UserProfile";
import News from "./components/news";

import TabBarHome from "../../components/common/TabBarHome";

const Drawer = createDrawerNavigator();

export default function Screen({ navigation }) {
  const [value, setValue] = useState({
    activeName: "Home",
  });

  useEffect(() => {
    async function getDefaultPage() {
      console.log(value.activeName);
    }
    getDefaultPage();
    return () => {
      setValue("Home");
    };
  }, []);

  const Home = ({ navigation }) => {
    return (
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70 }}
          style={{ height: "100%" }}
        >
          <StatusBar style="dark" />
          <Header navigation={navigation} />
          <BookingList />
          {/* <Menu p={2} pt={3} navigation={navigation} /> */}
          <News navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  };

  const ScreenLayout = () => {
    switch (value.activeName) {
      case "Home":
        return <Home navigation={navigation} />;
      case "Call":
        return <ListCalling navigation={navigation} />;
      case "User":
        return <UserProfile navigation={navigation} />;
      case "Booking":
        return <Schedule navigation={navigation} />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout bg={{ backgroundColor: "white" }} p={0} direction="column">
      <ScreenLayout />

      <TabBarHome
        style={{ position: "relative", top: 0 }}
        activeName={(activeName) => {
          setValue({ ...value, activeName: activeName });
        }}
      ></TabBarHome>

      {/* <ScrollView View height={SIZES.height / 3}>
        <News />
        <Voucher />
      </ScrollView> */}
    </Layout>
  );
}

// export default function Home() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Screen} />
//     </Drawer.Navigator>
//   );
// }

const styles = StyleSheet.create({});
