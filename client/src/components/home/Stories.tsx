import { Plus } from "lucide-react-native";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Stories = () => {
  return (
    <View className="flex-col gap-y-3">
      <Text className="text-xl font-bold">Stories</Text>

      <View className="flex-row gap-4">
        <FlatList
          data={[1, 2, 3, 4, 5]}
          horizontal
          contentContainerStyle={{ gap: 13 }}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={({ item }) => <RenderComponent />}
        />
      </View>
    </View>
  );
};

export default Stories;

const ListHeaderComponent = () => {
  return (
    <Pressable className="">
      <Image
        source={require("@/assets/images/logo.png")}
        className="h-48 w-36 rounded-3xl"
        alt="image"
      />
      <View className="absolute bottom-6 left-12 items-center gap-y-2">
        <View className="h-12 w-12 items-center justify-center rounded-full border border-white bg-black">
          <Plus color={"white"} />
        </View>
        <Text className="font-semibold text-white">create</Text>
      </View>
    </Pressable>
  );
};

const RenderComponent = () => {
  return (
    <Pressable>
      <Image
        source={require("@/assets/images/logo.png")}
        className="h-48 w-36 rounded-3xl"
        alt="image"
      />
      <View className="absolute bottom-6 left-11 items-center gap-y-2">
        <View className="size-14 items-center justify-center rounded-full bg-blue-600">
          <Text className="text-2xl font-bold text-white">A</Text>
        </View>
        <Text className="font-semibold text-white">Arnold</Text>
      </View>
    </Pressable>
  );
};
