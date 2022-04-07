import { View, Image, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { auth } from "../../Firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginErrorModal from "../../components/LoginStack/ErrorModal";
import LoginFooter from "../../components/LoginStack/Footer";
import Inputs from "../../components/LoginStack/Content";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";
import { MainStackProps } from "../../types/NavigationTypes";
const LogInScreen = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation<NavigationProp<MainStackProps>>();
  async function SignIn(mail: string, pass: string) {
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
      <View style={styles.logoCont}>
        <Image
          source={require("../../assets/headerLogo.png")}
          style={{ height: 65, resizeMode: "contain" }}
        />
        <Inputs handleSubmit={SignIn} />
      </View>
      <LoginFooter />
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;
