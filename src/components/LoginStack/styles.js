import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentCont: { alignItems: "center", width: "100%", paddingHorizontal: 20 },
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
  footerCont: {
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    width: "100%",
    borderTopColor: "#c4c4c4",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  footerTXT: {
    color: "#807d7d",
  },
  signUpText: { color: "#489cf0", fontWeight: "500" },
  centeredModal: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalCont: {
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
