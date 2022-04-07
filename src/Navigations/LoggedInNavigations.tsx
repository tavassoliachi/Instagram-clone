import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigations from "./TabNavigations";
import CommentScreen from "../Screens/CommentScreen";
import MessengerScreen from "../Screens/MessageListScreen";
import { auth } from "../Firebase-config";
import MessengerNavigations from "./MessengerNavigations";
import { LoggedInStackProps } from "../types/NavigationTypes";
const LoggedInNavigations = () => {
  const Stack = createStackNavigator<LoggedInStackProps>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabScreen"
        component={TabNavigations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="commentScreen"
        component={CommentScreen}
        options={{
          title: "Comments",
          headerBackTitleVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="messenger"
        component={MessengerNavigations}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNavigations;
