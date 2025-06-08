import React from "react";
import { FlatList, View } from "react-native";
import Post from "./Post";
import Header from "./Header";
import Stories from "./Stories";

const Feed = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View className="gap-y-5">
          <Header />
          <Stories />
        </View>
      }
      data={[1, 2, 3, 4, 5, 6]}
      contentContainerStyle={{ gap: 20, paddingBottom: 70 }}
      renderItem={({ item }) => <Post />}
    />
  );
};

export default Feed;
