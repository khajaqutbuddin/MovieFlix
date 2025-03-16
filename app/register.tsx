import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const RegisterScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // console.log('====================================');
    // console.log('Register data :', name, email, password);
    // console.log('====================================');
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }
    const user = { name, email, password };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    Alert.alert("Success", "Account created! Please login.");
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-gray-900 justify-center items-center p-6">
      <Text className="text-white text-2xl font-bold mb-5">Register</Text>
      <TextInput className="w-full bg-gray-700 text-white p-3 rounded mb-4" 
        placeholder="Name" placeholderTextColor="#ccc"
        onChangeText={setName} value={name} />

      <TextInput className="w-full bg-gray-700 text-white p-3 rounded mb-4" 
        placeholder="Email" placeholderTextColor="#ccc"
        onChangeText={setEmail} value={email} keyboardType="email-address" />

      <TextInput className="w-full bg-gray-700 text-white p-3 rounded mb-4"
        placeholder="Password" placeholderTextColor="#ccc" secureTextEntry
        onChangeText={setPassword} value={password} />

      <TouchableOpacity className="bg-blue-500 p-3 rounded w-full"
        onPress={handleRegister}>
        <Text className="text-white text-center font-bold">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4" onPress={() => router.push("/login")}>
        <Text className="text-gray-300">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
