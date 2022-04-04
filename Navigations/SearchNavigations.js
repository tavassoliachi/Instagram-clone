import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../Screens/SearchScreen";
import ProfileTab from "../Screens/ProfileScreen";
const SearchNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="searchMain" component={SearchTab} />
      <Stack.Screen name="searchProfile" component={ProfileTab} />
    </Stack.Navigator>
  );
};

export default SearchNavigations;

const styles = StyleSheet.create({});
