import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcons = ({ focused, title, icon }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-1  flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center  items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className="text-primary text-base font-semibold ml-2">
        
          {title}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View
        className=" size-full 
        justify-center items-center mt-4 rounded-full
       "
      >
        <Image source={icon} tintColor={"#A8B5db"} className="size-5" />
      </View>
    );
  }
};
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle:{
            height:'100%',
            width:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:"#0f0d23",
            borderRadius:50,
            marginHorizontal:10,
            marginBottom:10,
            height:52,
            overflow:"hidden",
            position:"absolute",
            borderWidth:1,
            borderColor:'#0f0d23'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons focused={focused} title={"Home"} icon={icons.home} />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                focused={focused}
                title={"Search"}
                icon={icons.search}
              />
            </>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons focused={focused} title={"Saved"} icon={icons.save} />
            </>
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcons
                focused={focused}
                title={"Profile"}
                icon={icons.person}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
