import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { auth } from "../../Firebase-config";
interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthModal = ({ modal, setModal }: Props) => {
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
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={styles.closeBtn}
          >
            <Text style={styles.exitText}>Cencel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => [setModal(false), auth.signOut()]}
            style={styles.closeBtn}
          >
            <Text style={styles.exitText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AuthModal;
