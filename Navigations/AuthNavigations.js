import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "../Screens/AuthStack";
import RegisterStack from "../Screens/RegisterStack";
import LogInStack from "../Screens/LogInStack";

const StackNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, initialRouteName: "Main" }}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="LogIn" component={LogInStack} />
      <Stack.Screen name="Register" component={RegisterStack} />
    </Stack.Navigator>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
