import Feed from "@/src/components/home/Feed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="h-full w-full flex-1 flex-col gap-y-8 bg-white p-4">
      <Feed />
    </SafeAreaView>
  );
};

export default Home;
