import React from "react";

import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 relative align-center justify-center">
      <View>
        <Text className=" text-center font-bold uppercase">
          Hello World!! Weather App Init!
        </Text>
      </View>
    </SafeAreaView>
  );
}
