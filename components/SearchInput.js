import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
import { theme } from "../theme";
import { MapPinIcon } from "react-native-heroicons/solid";
const SearchInput = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("location", loc);
  };
  return (
    <View style={{ height: "7%" }} className="mx-4 relative z-50">
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
        }}
      >
        {showSearch ? (
          <TextInput
            placeholder="Search city"
            placeholderTextColor={"lightgray"}
            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
          />
        ) : null}

        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          className="rounded-full p-3 m-1"
          style={{
            backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
          }}
        >
          {showSearch ? (
            <XMarkIcon size="25" color="white" />
          ) : (
            <MagnifyingGlassIcon size="25" color="white" />
          )}
        </TouchableOpacity>
      </View>

      {locations.length > 0 && showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
          {locations.map((loc, index) => {
            let showBorder = index + 1 != locations.length;
            let borderClass = showBorder ? " border-b-2 border-b-gray-400" : "";

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(loc)}
                className={
                  "flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass
                }
              >
                <MapPinIcon size="20" color="gray" />
                <Text className="text-black text-lg ml-2">Varna, Bulgaria</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default SearchInput;
