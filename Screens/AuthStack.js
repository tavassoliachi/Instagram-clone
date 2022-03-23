import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../Firebase-config";
const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainCont}>
      <View style={styles.subCont}>
        <Image
          source={require("../assets/headerLogo.png")}
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

export default AuthStack;

const styles = StyleSheet.create({
  mainCont: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  subCont: {
    backgroundColor: "white",
    height: "30%",
    alignItems: "center",
    marginHorizontal: 25,
  },
  logo: {
    height: 65,
    resizeMode: "contain",
  },
  registerBtn: {
    backgroundColor: "#489cf0",
    width: "100%",
    paddingVertical: 13,
    borderRadius: 3,
    marginTop: 37,
  },
  registerTxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  loginTxt: {
    color: "#489cf0",
    marginTop: 25,
    fontWeight: "600",
  },
});
