import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";

const LoginErrorModal = ({ modal, setModal }) => {
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
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  centeredModal: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  container: {
    borderRadius: 20,
    width: "70%",
    height: 200,
    backgroundColor: "white",
  },
  textContainer: { flex: 3, alignItems: "center", justifyContent: "center" },
  title: { fontWeight: "bold", fontSize: 15, marginBottom: 15 },
  description: { color: "grey", width: 200 },
  closeBtn: {
    borderTopColor: "#c4c4c4",
    borderTopWidth: 1,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  exitText: {
    color: "#489cf0",
    fontWeight: "bold",
  },
});
