import SignUpForm from "@/src/components/auth/SignUpForm";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="h-full w-full flex-1 items-center justify-center bg-white p-5">
      <View className="w-full flex-col items-center justify-center gap-y-4">
        <Image
          source={require("@/assets/images/logo.png")}
          className="h-16 w-16 rounded-xl"
        />
        <Text className="text-2xl font-bold">Sign Up</Text>
        <Text className="text-neutral-500">
          Join Revlov to experiance joy of social life
        </Text>
        <SignUpForm />
        <View className="flex-row gap-x-1">
          <Text>Already have an account?</Text>
          <Link href={"/sign-in"} className="font-semibold text-blue-600">
            <Text>signIn</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
