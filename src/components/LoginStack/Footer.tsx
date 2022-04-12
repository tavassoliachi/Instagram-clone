import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { AuthStackProps } from "../../types/NavigationTypes";
const LoginFooter = () => {
  const navigation = useNavigation<NavigationProp<AuthStackProps, "LogIn">>();
  return (
    <View style={styles.footerCont}>
      <Text style={styles.footerTXT}>Don't have an account? </Text>
      <Text style={styles.signUpText} onPress={() => navigation.goBack()}>
        Sign Up
      </Text>
    </View>
  );
};

export default LoginFooter;
