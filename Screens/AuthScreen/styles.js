import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainCont: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  subCont: {
    backgroundColor: "white",
    height: "30%",
    alignItems: "center",
    marginHorizontal: 25,
  },
  logo: {
    height: 65,
    resizeMode: "contain",
  },
  registerBtn: {
    backgroundColor: "#489cf0",
    width: "100%",
    paddingVertical: 13,
    borderRadius: 3,
    marginTop: 37,
  },
  registerTxt: {
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  loginTxt: {
    color: "#489cf0",
    marginTop: 25,
    fontWeight: "600",
  },
});
