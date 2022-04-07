import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
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
        <View style={styles.container}>
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
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
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
