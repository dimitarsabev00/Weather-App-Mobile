import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "../theme";
import { weatherImages } from "../constants";

const Forecast = ({ location, current, weather }) => {
  return (
    <>
      <View className="mx-4 flex justify-around flex-1 mb-2">
        <Text className="text-white text-center text-2xl font-bold">
          {location?.name},
          <Text className="text-lg font-semibold text-gray-300">
            {" "}
            {location?.country}
          </Text>
        </Text>

        <View className="flex-row justify-center">
          <Image
            source={weatherImages[current?.condition?.text || "other"]}
            className="w-52 h-52"
          />
        </View>

        <View className="space-y-2">
          <Text className="text-center font-bold text-white text-6xl ml-5">
            {current?.temp_c}&#176;
          </Text>
          <Text className="text-center text-white text-xl tracking-widest">
            {current?.condition?.text}
          </Text>
        </View>

        {/* other stats */}
        <View className="flex-row justify-between mx-4">
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/wind.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">
              {current?.wind_kph}km
            </Text>
          </View>
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/drop.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">
              {current?.humidity}%
            </Text>
          </View>
          <View className="flex-row space-x-2 items-center">
            <Image
              source={require("../assets/icons/sun.png")}
              className="w-6 h-6"
            />
            <Text className="text-white font-semibold text-base">
              {weather?.forecast?.forecastday[0]?.astro?.sunrise}
            </Text>
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
          {weather?.forecast?.forecastday?.map((item, index) => {
            const date = new Date(item.date);
            const options = { weekday: "long" };
            let dayName = date.toLocaleDateString("en-US", options);
            dayName = dayName.split(",")[0];

            return (
              <View
                key={index}
                className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                style={{ backgroundColor: theme.bgWhite(0.15) }}
              >
                <Image
                  source={weatherImages[item?.day?.condition?.text || "other"]}
                  className="w-11 h-11"
                />
                <Text className="text-white">{dayName}</Text>
                <Text className="text-white text-xl font-semibold">
                  {item?.day?.avgtemp_c}&#176;
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Forecast;
