import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerCont: {
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerBTN: {
    flexDirection: "row",
  },
  headerUsername: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon1: {
    alignSelf: "flex-start",
  },
  iconCont: {
    flexDirection: "row",
  },
  icon2: {
    marginRight: 15,
  },
  centeredModal: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    borderRadius: 20,
    width: "70%",
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
  },
  textContainer: { flex: 3, alignItems: "center", justifyContent: "center" },
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
  header1Cont: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  header1Subcont: {
    width: "40%",
    left: 0,
  },
  profileDetails: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  editProfile: {
    borderColor: "#c4c4c4",
    paddingVertical: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#c4c4c4",
  },
  loading: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    position: "absolute",
  },
  title: {
    fontWeight: "600",
  },
  txt: {
    fontWeight: "300",
  },

  profileHeader: {
    width: "80%",
    alignItems: "center",
  },
  username: {
    marginTop: 5,
    fontWeight: "600",
  },
  followNum: {
    alignItems: "center",
  },
  followState: {
    textAlign: "center",
    fontWeight: "600",
  },
  editTXT: {
    textAlign: "center",
    fontWeight: "600",
  },
  iconsCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#c4c4c4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
  },
});
