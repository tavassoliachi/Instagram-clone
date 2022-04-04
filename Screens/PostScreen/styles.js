import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainCont: { flex: 1, backgroundColor: "white" },
  cont1: {
    marginVertical: 10,
    flexDirection: "row",
    marginHorizontal: 15,
  },
  cont2: {
    width: 90,
    height: 80,
    backgroundColor: "#c4c4c4",
    alignItems: "center",
  },
  socialMedia: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  locationCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#c4c4c4",
    paddingVertical: 13,
    alignItems: "center",
  },
  tagCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#c4c4c4",
    paddingVertical: 13,
    alignItems: "center",
  },
  input: {
    width: "80%",
    alignSelf: "flex-start",
    flex: 1,
    padding: 10,
    flexWrap: "wrap",
  },
  loading: {
    width: 80,
    height: 80,
    position: "absolute",
  },
  image: {
    width: 90,
    height: 80,
    resizeMode: "contain",
  },
});
