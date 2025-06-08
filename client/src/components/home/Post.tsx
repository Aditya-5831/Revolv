import {
  Bookmark,
  EllipsisVertical,
  Heart,
  MessageCircle,
  Send,
} from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Post = () => {
  return (
    <View className="flex-col gap-y-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-3">
          <Image
            source={require("@/assets/images/logo.png")}
            className="h-14 w-14 rounded-full"
          />
          <View className="flex-col">
            <Text className="text-lg font-semibold">Jason Watson</Text>
            <Text className="text-sm text-gray-400">10 min ago</Text>
          </View>
        </View>
        <TouchableOpacity>
          <EllipsisVertical />
        </TouchableOpacity>
      </View>
      <View className="gap-y-3 rounded-3xl bg-gray-50 p-2">
        <Image
          source={require("@/assets/images/post-image.jpg")}
          className="h-60 w-full rounded-3xl"
        />
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-x-3">
            <TouchableOpacity className="flex-row items-center gap-x-2">
              <Heart />
              <Text>2.5k</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-x-2">
              <MessageCircle />
              <Text>2.5k</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-x-2">
              <Send />
              <Text>2.5k</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="flex-row items-center gap-x-2">
            <Bookmark />
          </TouchableOpacity>
        </View>
        <Text className="text-sm text-gray-500">
          “Look deep into nature, and then you will understand everything
          better...
        </Text>
        <View className="flex-row gap-x-5">
          <Text>#nature</Text>
          <Text>#green</Text>
          <Text>#environment</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
