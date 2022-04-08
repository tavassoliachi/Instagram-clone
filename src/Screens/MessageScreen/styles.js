import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  subCont: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    height: 900,
  },
  flatList: { width: "100%" },
  renderItem: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginRight: 15,
  },
  text: {
    borderRadius: 20,
    padding: 10,
  },
  inputCont: {
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#dedede",
    height: 40,
    borderRadius: 20,
    paddingLeft: 45,
  },
  cameraIcon: {
    backgroundColor: "#4f92d1",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35 / 2,
    position: "absolute",
    left: 3,
  },
  iconsCont: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    position: "absolute",
    right: 20,
    justifyContent: "space-between",
  },
  btn: {
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  send: {
    fontWeight: "700",
    color: "green",
  },
});
