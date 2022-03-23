import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { auth } from "../Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginErrorModal from "../components/LoginStack/ErrorModal";
import LoginFooter from "../components/LoginStack/Footer";
import Inputs from "../components/LoginStack/Content";
import { useNavigation } from "@react-navigation/native";

const LogInStack = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  async function SignIn(mail, pass) {
    try {
      await signInWithEmailAndPassword(auth, mail, pass);
    } catch (error) {
      setModal(true);
      return;
    }
    navigation.navigate("Main");
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <LoginErrorModal modal={modal} setModal={setModal} />
      <View
        style={{
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../assets/headerLogo.png")}
          style={{ height: 65, resizeMode: "contain" }}
        />
        <Inputs handleSubmit={SignIn} />
      </View>
      <LoginFooter />
    </KeyboardAvoidingView>
  );
};

export default LogInStack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
