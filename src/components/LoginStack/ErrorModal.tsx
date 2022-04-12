import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import React from "react";
interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginErrorModal = ({ modal, setModal }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(false);
      }}
    >
      <View style={styles.centeredModal}>
        <View style={styles.modalCont}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Incorrect password</Text>
            <Text style={styles.description}>
              The password you entered is incorrect. Please try again.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setModal(false)}
            style={styles.closeBtn}
          >
            <Text style={styles.exitText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginErrorModal;
