import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../Screens/AuthScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import LogInScreen from "../Screens/LogInScreen";

const StackNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, initialRouteName: "Main" }}
    >
      <Stack.Screen name="Auth" component={Au} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
