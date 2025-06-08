import {
  Explore,
  HomeDark,
  HomeWhite,
  ReelsDark,
  ReelsWhite,
} from "@/src/constants/icons";
import { cn } from "@/src/lib/utils";
import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { Plus, User } from "lucide-react-native";

const NoRippleTabButton = (props: any) => (
  <Pressable
    android_ripple={{ color: "transparent" }}
    onPress={props.onPress}
    style={props.style}
  >
    {props.children}
  </Pressable>
);

const TabsLayout = () => {
  const pathname = usePathname();
  const url = pathname.split("/")[1];

  return (
    <Tabs
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarButton: NoRippleTabButton,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 15,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 35,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => (
            <View
              className={cn(
                "w-14 h-14 rounded-full items-center justify-center",
                url === "home" ? "bg-black/5" : "bg-white"
              )}
            >
              {url === "home" ? (
                <HomeDark width={27} height={27} />
              ) : (
                <HomeWhite width={27} height={27} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: () => (
            <View
              className={cn(
                "w-14 h-14 rounded-full items-center justify-center",
                url === "explore" ? "bg-black/5" : "bg-white"
              )}
            >
              {url === "explore" ? (
                <Explore
                  width={27}
                  height={27}
                  stroke={"black"}
                  strokeWidth={0.5}
                />
              ) : (
                <Explore width={27} height={27} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: () => (
            <View className="size-14 bg-black rounded-full items-center justify-center">
              <Plus color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          tabBarIcon: () => (
            <View
              className={cn(
                "w-14 h-14 rounded-full items-center justify-center",
                url === "reels" ? "bg-black/5" : "bg-white"
              )}
            >
              {url === "reels" ? (
                <ReelsDark width={27} height={27} />
              ) : (
                <ReelsWhite
                  strokeWidth={1}
                  stroke={"black"}
                  width={27}
                  height={27}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="[username]"
        initialParams={{ username: "Aditya" }}
        options={{
          tabBarIcon: () => (
            <View
              className={cn(
                "w-14 h-14 rounded-full items-center justify-center",
                url === "Aditya" ? "bg-black/5" : "bg-white"
              )}
            >
              {url === "Aditya" ? (
                <User fill={"black"} width={27} height={27} />
              ) : (
                <User width={27} height={27} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
