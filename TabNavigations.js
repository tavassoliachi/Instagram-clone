import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchTab from './Screens/SearchTab';
import HomeTab from './Screens/HomeTab';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
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
        component={SearchTab}
        options={{
          tabBarIcon: () => <AntDesign name="search1" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;

const styles = StyleSheet.create({});
