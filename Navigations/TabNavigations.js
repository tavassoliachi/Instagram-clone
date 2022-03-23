import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTab from "../Screens/SearchTab";
import HomeTab from "../Screens/HomeTab";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileTab from "../Screens/ProfileTab";
import SearchNavigations from "./SearchNavigations";
import { useDispatch } from "react-redux";
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
          tabBarIcon: () => <Foundation name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchNavigations}
        options={{
          tabBarIcon: () => <AntDesign name="search1" size={32} />,
        }}
      />
      <Tab.Screen
        name="newPost"
        component={ProfileTab}
        options={{
          tabBarIcon: () => <FontAwesome name="plus-square-o" size={30} />,
        }}
      />
      <Tab.Screen
        name="activity"
        component={ProfileTab}
        options={{
          tabBarIcon: () => <Feather name="heart" size={28} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileTab}
        options={{
          tabBarIcon: () => <EvilIcons name="user" size={45} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;
