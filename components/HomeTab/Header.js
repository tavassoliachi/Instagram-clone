import { StyleSheet, View, Image, Platform } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { auth } from "../../Firebase-config";
import handlePost from "../handlePost";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Redux/Actions";
const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((el) => el?.addUser.user);
  const uploadPost = async (url) => {
    await setDoc(
      doc(
        db,
        "posts",
        `${data.uid + "-" + (Math.random() + Math.random()).toString()}`
      ),
      {
        img: url,
        name: `${data.uid + "-" + (Math.random() + Math.random()).toString()}`,
        username: data.displayName,
        uid: data.uid,
        createDate: Date.now(),
        likes: [],
        comments: [],
        avatar: data.avatar || "",
      }
    );
    dispatch(getPosts());
  };
  return (
    <View style={styles.cont}>
      <Image
        source={require("../../assets/headerLogo.png")}
        style={styles.logo}
      />
      <View style={styles.iconsCont}>
        <Feather
          name="plus-square"
          size={25}
          onPress={() => handlePost(uploadPost)}
        />
        <Feather name="heart" size={25} />
        <MaterialCommunityIcons name="facebook-messenger" size={25} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cont: {
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
