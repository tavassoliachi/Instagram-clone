import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase-config";
import { createStackNavigator } from "@react-navigation/stack";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { styles } from "./style";
const RegisterScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step1" component={Register1} />
      {/* <Stack.Screen name="Confirmation" component={Confirmation} /> */}
    </Stack.Navigator>
  );
};

export default RegisterScreen;

const Register1 = ({ navigation }) => {
  const [registerType, setRegisterType] = useState("email");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, mail, password).then(async () => {
      await updateProfile(auth.currentUser, { username: `${username}` });
      let searchQuery = [];
      let searchKeyword = "";
      for (let i = 0; i < username.length; i++) {
        searchKeyword += username[i];
        searchQuery.push(searchKeyword);
      }
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          username: `${username}`,
          uid: auth.currentUser.uid,
          searchQuery: searchQuery,
          followers: [],
          following: [],
        },
        { merge: true }
      );
      navigation.navigate("Main");
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MaterialIcons
        name="arrow-back-ios"
        size={25}
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.loginInfo}>
          Enter phone number or email address
        </Text>
        <View
          style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 10 }}
        >
          <View
            style={{
              paddingHorizontal: 50,
              borderBottomWidth: registerType == "phone" ? 2 : 1,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                paddingBottom: 10,
                color: registerType == "phone" ? "black" : "gray",
              }}
              onPress={() => setRegisterType("phone")}
            >
              Phone
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 50,
              borderBottomWidth: registerType == "email" ? 2 : 1,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                paddingBottom: 10,
                color: registerType == "email" ? "black" : "gray",
              }}
              onPress={() => setRegisterType("email")}
            >
              Email
            </Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={mail}
          onChangeText={setMail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TouchableOpacity
          key={username + password + mail}
          style={{
            ...styles.submit,
            width: Dimensions.get("window").width - 80,
            opacity: username && password && mail ? 1 : 0.6,
          }}
          disabled={!(username && password && mail)}
          onPress={handleSubmit}
        >
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
