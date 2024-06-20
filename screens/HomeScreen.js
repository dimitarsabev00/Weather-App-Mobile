import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";

import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Forecast, SearchInput } from "../components";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { getData, storeData } from "../utils/asyncStorage";
import { debounce } from "lodash";
import * as Progress from "react-native-progress";

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  const handleSearch = (search) => {
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => {
        setLocations(data);
      });
  };

  const handleLocation = (loc) => {
    setLoading(true);
    toggleSearch(false);
    setLocations([]);
    ``;
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setLoading(false);
      setWeather(data);
      storeData("city", loc.name);
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Varna";
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: "7",
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { location, current } = weather;

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView className="flex flex-1">
          <SearchInput
            handleTextDebounce={handleTextDebounce}
            showSearch={showSearch}
            toggleSearch={toggleSearch}
            locations={locations}
            handleLocation={handleLocation}
          />
          <Forecast location={location} current={current} weather={weather} />
        </SafeAreaView>
      )}
    </View>
  );
}
