import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  LoggedInStackProps,
  TabNavigationsProps,
} from "../../types/NavigationTypes";
import { styles } from "./styles";
const Header = () => {
  const navigation =
    useNavigation<
      CompositeNavigationProp<
        BottomTabNavigationProp<TabNavigationsProps>,
        StackNavigationProp<LoggedInStackProps>
      >
    >();

  return (
    <View style={styles.tabHeaderCont}>
      <Image
        source={require("../../assets/headerLogo.png")}
        style={styles.logo}
      />
      <View style={styles.iconsCont}>
        <Feather
          name="plus-square"
          size={25}
          onPress={() => navigation.navigate("newPost")}
        />
        <Feather name="heart" size={25} />
        <MaterialCommunityIcons
          name="facebook-messenger"
          size={25}
          onPress={() => navigation.navigate("messenger")}
        />
      </View>
    </View>
  );
};

export default Header;
