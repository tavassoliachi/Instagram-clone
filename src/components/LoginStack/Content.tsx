import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
interface Props {
  handleSubmit: (mail: string, pass: string) => void;
}
const Inputs = ({ handleSubmit }: Props) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View style={styles.contentCont}>
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
