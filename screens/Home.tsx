import { Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text style={tw.style("text-red-500 text-center mt-20")}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
