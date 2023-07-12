import React from "react";
import { ActivityIndicator, View, Dimensions, Text } from "react-native";

const LoadingScreen = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View
      style={{
        justifyContent: "center",
        backgroundColor: "#fff",
        height: height,
        alignItems: "center",
        width: "100%",
      }}
    >
      <ActivityIndicator size="large" />
      <Text style={{}}>Memuat...</Text>
    </View>
  );
};

export default LoadingScreen;
