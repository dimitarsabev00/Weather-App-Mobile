import { StatusBar } from "expo-status-bar";
import React from "react";

import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput } from "../components";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      <SafeAreaView className="flex flex-1">
        <SearchInput />
        
      </SafeAreaView>
    </View>
  );
}
