import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  msgCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  msgSubcont: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usernameCont: {
    flexDirection: "column",
    marginLeft: 15,
  },
  username: { fontWeight: "400", fontSize: 14 },
  seen: { color: "grey", fontSize: 12 },
});
