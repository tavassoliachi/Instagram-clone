import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../Screens/AuthScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import LogInScreen from "../Screens/LogInScreen";
import { AuthStackProps } from "../types/NavigationTypes";
export const StackNavigations = () => {
  const Stack = createStackNavigator<AuthStackProps>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
