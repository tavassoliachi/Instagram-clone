import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../Screens/HomeTab";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileTab from "../Screens/ProfileTab";
import SearchNavigations from "./SearchNavigations";
import { useDispatch } from "react-redux";
import PostScreen from "../Screens/PostScreen";
import { getPosts } from "../Redux/Actions";
const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeTab}
        tabBar
        options={{
          tabBarIcon: ({ focused }) => <Foundation name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchNavigations}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ios-search" : "search-outline"}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="newPost"
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus-square-o" size={30} />
          ),

          title: "New post",
          headerBackTitleVisible: false,
          headerTintColor: "black",
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="activity"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name={focused ? "heart" : "hearto"} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ focused }) => (
            <EvilIcons name="user" size={43} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;
