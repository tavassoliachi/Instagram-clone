import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "../Firebase-config";
import MessageListScreen from "../Screens/MessageListScreen";
import MessageScreen from "../Screens/MessageScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { TRedux } from "../types/ReduxTypes";
import { MessengerStackProps } from "../types/NavigationTypes";

const MessengerNavigations = () => {
  const Stack = createStackNavigator<MessengerStackProps>();
  const username = useSelector((e: TRedux) => e?.addUser?.user?.username);
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="messageListScreen"
        component={MessageListScreen}
        options={{
          title: username,
          headerTitleAlign: "left",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="message"
        component={MessageScreen}
        options={({ route }) => ({
          headerTitleAlign: "left",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 80,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <Ionicons name="call-outline" size={30} />

              <Ionicons name="videocam-outline" size={30} />
            </View>
          ),
          headerTitle: () => {
            const { username } = route.params.target;
            return (
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 35, height: 35, borderRadius: 35 / 2 }}
                  source={{
                    uri: "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
                  }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontWeight: "600" }}>{username}</Text>
                  <Text style={{ fontSize: 13, color: "grey" }}>
                    {username}
                  </Text>
                </View>
              </View>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default MessengerNavigations;

const styles = StyleSheet.create({});
