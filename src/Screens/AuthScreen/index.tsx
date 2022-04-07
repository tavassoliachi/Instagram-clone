import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { AuthStackProps, TabNavigationsProps } from "../../types/NavigationTypes";
import { NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
const AuthScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackProps>>();
  return (
    <View style={styles.mainCont}>
      <View style={styles.subCont}>
        <Image
          source={require("../../assets/headerLogo.png")}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.push("Register")}
        >
          <Text style={styles.registerTxt}>Create New Account</Text>
        </TouchableOpacity>
        <Text style={styles.loginTxt} onPress={() => navigation.push("LogIn")}>
          Log In
        </Text>
      </View>
    </View>
  );
};

export default AuthScreen;
