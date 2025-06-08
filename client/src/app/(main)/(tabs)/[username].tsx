import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const { username } = useLocalSearchParams();

  console.log("username", username);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
