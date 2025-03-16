import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useLocalSearchParams } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const { name, email, password } = useLocalSearchParams<{ name: string; email: string, password:string }>();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/login");
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <Text className="text-white text-2xl font-bold mb-5">Profile</Text>
      <Text className="text-gray-300 text-lg">Name: {name}</Text>
      <Text className="text-gray-300 text-lg">Email: {email}</Text>
      {/* <Text className="text-gray-300 text-lg">Password: {password}</Text> */}

      <TouchableOpacity className="bg-red-500 p-3 rounded mt-5" onPress={handleLogout}>
        <Text className="text-white text-center font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
