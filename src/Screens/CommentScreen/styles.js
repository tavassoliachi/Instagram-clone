import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cont: {
    borderTopColor: "#ededed",
    borderTopWidth: 1,
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "#c4c4c4",
  },
  inputCont: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 20,
    paddingLeft: 10,
    justifyContent: "center",
  },
  submit: {
    position: "absolute",
    right: 10,
    fontWeight: "700",
    color: "#489cf0",
  },
});
