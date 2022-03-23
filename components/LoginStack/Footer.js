import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const LoginFooter = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't have an account? </Text>
      <Text style={styles.signUpText} onPress={() => navigation.goBack()}>
        Sign Up
      </Text>
    </View>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#c4c4c4",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  text: {
    color: "#807d7d",
  },
  signUpText: { color: "#489cf0", fontWeight: "500" },
});
