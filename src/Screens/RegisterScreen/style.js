import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
  },
  loginInfo: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "300",
    width: "75%",
  },
  next: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
  },
  submit: {
    backgroundColor: "#489cf0",
    paddingVertical: 13,
    borderRadius: 3,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    backgroundColor: "#f5f5f5",
    borderRadius: 3,
    width: "80%",
    paddingLeft: 10,
  },
  backBTN: {
    marginLeft: 10,
  },
  loginInfoCont: {
    alignItems: "center",
  },
  optionsCont: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
  },
  optionsSubCont: {
    paddingHorizontal: 50,
  },
  optionTXT: {
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 10,
  },
});
