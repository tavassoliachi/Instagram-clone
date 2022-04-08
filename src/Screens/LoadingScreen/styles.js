import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 70,
  },
  txt: {
    textAlign: "center",
    color: "#c4c4c4",
    fontWeight: "500",
    fontSize: 15,
  },
  metaImage: {
    height: 40,
    resizeMode: "contain",
    bottom: 0,
    right: 0,
  },
  subCont: {
    height: "85%",
    justifyContent: "center",
  },
});
