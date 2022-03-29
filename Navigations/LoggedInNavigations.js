import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigations from "./TabNavigations";
import PostScreen from "../Screens/PostScreen";
import CommentScreen from "../Screens/CommentScreen";
const LoggedInNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabScreen"
        component={TabNavigations}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="postScreen"
        component={PostScreen}
        options={{
          title: "New post",
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      /> */}
      <Stack.Screen
        name="commentScreen"
        component={CommentScreen}
        options={{
          title: "Comments",
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNavigations;
