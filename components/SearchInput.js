import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
import { theme } from "../theme";

const SearchInput = () => {
  const [showSearch, toggleSearch] = useState(false);

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
    </View>
  );
};

export default SearchInput;
