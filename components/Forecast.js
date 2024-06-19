import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";

const Forecast = () => {
  return (
    <>
      <View className="mx-4 flex justify-around flex-1 mb-2">
        <Text className="text-white text-center text-2xl font-bold">
          Varna,
          <Text className="text-lg font-semibold text-gray-300"> Bulgaria</Text>
        </Text>

        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/partlycloudy.png")}
            className="w-52 h-52"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-center font-bold text-white text-6xl ml-5">
            25&#176;
          </Text>
          <Text className="text-center text-white text-xl tracking-widest">
            Partly cloudy
          </Text>
        </View>

        {/* other stats */}
        <View className="flex-row justify-between mx-4">
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/wind.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">10 km</Text>
          </View>
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/drop.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">5%</Text>
          </View>
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/sun.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">69</Text>
          </View>
        </View>
      </View>

      {/* forecast for next days */}
      <View className="mb-2 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
          <CalendarDaysIcon size="22" color="white" />
          <Text className="text-white text-base">Daily forecast</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Monday</Text>
            <Text className="text-white text-xl font-semibold">12&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Tuesday</Text>
            <Text className="text-white text-xl font-semibold">15&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Wednesday</Text>
            <Text className="text-white text-xl font-semibold">18&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Thursday</Text>
            <Text className="text-white text-xl font-semibold">17&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Friday</Text>
            <Text className="text-white text-xl font-semibold">20&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Saturday</Text>
            <Text className="text-white text-xl font-semibold">22&#176;</Text>
          </View>
          <View
            className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
            style={{ backgroundColor: theme.bgWhite(0.15) }}
          >
            <Image
              source={require("../assets/images/heavyrain.png")}
              className="w-11 h-11"
            />
            <Text className="text-white">Sunday</Text>
            <Text className="text-white text-xl font-semibold">16&#176;</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Forecast;
