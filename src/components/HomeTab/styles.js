import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footerCont: {
    paddingHorizontal: 12,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  iconsSubCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
  },
  likes: {
    fontWeight: "600",
    marginBottom: 5,
  },
  usernameCont: {
    marginBottom: 5,
  },
  username: {
    fontWeight: "600",
  },
  comment: {
    color: "gray",
    marginBottom: 5,
  },
  date: {
    color: "gray",
    fontSize: 12,
    marginBottom: 10,
  },
  headerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  headerSubCont: { flexDirection: "row", marginLeft: 8 },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: "#c4c4c4",
  },
  username: { alignSelf: "center", marginLeft: 8, fontWeight: "600" },
  seeMore: {
    marginRight: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
  contentCont: {
    marginVertical: 12,
    minHeight: 250,
    backgroundColor: "#c4c4c4",
  },
  contentIMG: {
    resizeMode: "contain",
    width: "100%",
    backgroundColor: "#c4c4c4",
  },
  storyCont: {
    margin: 6,
  },
  storySubCont: {
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 2,
    maxWidth: 77,
  },
  storyAvatar: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2,
    margin: 3,
  },
  storyUsername: {
    textAlign: "center",
  },
  tabHeaderCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 4,
    height: 30,
  },
  logo: {
    height: 45,
    width: 145,
    resizeMode: "contain",
  },
  iconsCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "40%",
  },
});
