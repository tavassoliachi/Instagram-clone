import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigations from './TabNavigations';
import AuthStack from './Screens/AuthStack';
import LogInStack from './Screens/LogInStack';
const StackNavigations = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="LogIn" component={LogInStack} />
        <Stack.Screen name="Main" component={TabNavigations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigations;

const styles = StyleSheet.create({});
