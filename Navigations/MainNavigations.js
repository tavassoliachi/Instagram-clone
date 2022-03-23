import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigations from "./TabNavigations";
import AuthNavigations from "./AuthNavigations";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getUserData } from "../Redux/Actions";
import LoadingScreen from "../Screens/LoadingScreen";
const MainNavigations = () => {
  const Stack = createStackNavigator();
  const [isLogged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      user ? [setLogged(true), dispatch(getUserData())] : setLogged(false);
      setLoading(false);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : isLogged ? (
          <Stack.Screen name="Main" component={TabNavigations} />
        ) : (
          <Stack.Screen name="AuthMain" component={AuthNavigations} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigations;

const styles = StyleSheet.create({});
