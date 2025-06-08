import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Bell, MessageCircle } from "lucide-react-native";

const Header = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-x-4">
        <Image
          source={require("@/assets/images/logo.png")}
          className="w-14 h-14 rounded-2xl"
          alt="logo"
        />
        <Text className="text-2xl font-bold">Revolv</Text>
      </View>
      <View className="flex-row gap-x-8">
        <TouchableOpacity>
          <Bell size={26} />
          <View className="bg-rose-500 rounded-full size-2.5 items-center justify-center absolute right-1 border border-white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MessageCircle size={26} />
          <View className="bg-rose-500 rounded-full size-4 items-center justify-center absolute right-0">
            <Text className="text-xs text-white">4</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
