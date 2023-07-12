import { useReducer, useState, useEffect } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.antiqueWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: true,
          headerShown: false,
          // headerLeft: ()=>(
          //   <ScreenHeaderBtn iconUrl={images.logo} dimension="100%"/>
          // ),
          headerTitle: "",
        }}
      />

      <Image
        source={images.home_image}
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          height: height,
          width: width,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      {/* <Image
        source={images.home_image_bottom}
        resizeMode="contain"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          height: height,
          width: width,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      /> */}
      <ScrollView style={{ marginTop: 0, flex: 1, zIndex: 2 }}>
        <View
          style={{
            flex: 1,
            padding: 0,
          }}
        >
          <Welcome />
        </View>
      </ScrollView>
      <ImageBackground
        source={images.home_image_bottom}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          position: "absolute",
          width: "100%",
          backgroundColor: "transparent",
          height: 200,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "300",
          }}
        >
          © 2023 BPS Provinsi Sulawesi Utara
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            fontWeight: "300",
          }}
        >
          Jl. 17 Agustus, 95119, Telp (0431) 847044
        </Text>
      </ImageBackground>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Home;
