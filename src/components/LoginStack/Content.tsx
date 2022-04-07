import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
interface Props {
  handleSubmit: (mail: string, pass: string) => void;
}
const Inputs = ({ handleSubmit }: Props) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone number, username or email address"
        style={styles.input}
        placeholderTextColor="#807d7d"
        value={mail}
        onChangeText={setMail}
      />
      <TextInput
        placeholder="Passsword"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#807d7d"
        value={pass}
        onChangeText={setPass}
      />
      <Text style={styles.forgotPass}>Forgotten password?</Text>
      <TouchableOpacity
        key={mail + pass}
        disabled={!(mail && pass)}
        style={{ ...styles.submitBtn, opacity: mail && pass ? 1 : 0.6 }}
        onPress={() => handleSubmit(mail, pass)}
      >
        <Text style={styles.submitText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  container: { alignItems: "center", width: "100%", paddingHorizontal: 20 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    backgroundColor: "#f5f5f5",
    borderRadius: 3,
    width: "100%",
    paddingLeft: 10,
  },
  forgotPass: {
    alignSelf: "flex-end",
    color: "#489cf0",
    fontWeight: "600",
    fontSize: 12,
  },
  submitBtn: {
    backgroundColor: "#489cf0",
    width: "100%",
    paddingVertical: 13,
    borderRadius: 3,
    marginTop: 37,
  },
  submitText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});
