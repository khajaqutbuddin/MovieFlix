import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) {
      Alert.alert("Error", "No user found. Please register.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email === email && user.password === password) {
      Alert.alert("Success", "Logged in successfully!");
      router.push({ pathname: "/(tabs)/profile", params: user });
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center p-6">
      <Text className="text-white text-2xl font-bold mb-5">Login</Text>

      <TextInput className="w-full bg-gray-700 text-white p-3 rounded mb-4" 
        placeholder="Email" placeholderTextColor="#ccc"
        onChangeText={setEmail} value={email} keyboardType="email-address" />

      <TextInput className="w-full bg-gray-700 text-white p-3 rounded mb-4"
        placeholder="Password" placeholderTextColor="#ccc" secureTextEntry
        onChangeText={setPassword} value={password} />

      <TouchableOpacity className="bg-blue-500 p-3 rounded w-full"
        onPress={handleLogin}>
        <Text className="text-white text-center font-bold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4" onPress={() => router.push("/register")}>
        <Text className="text-gray-300">Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
