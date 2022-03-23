import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase-config";
import { uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { getPosts } from "../Redux/Actions";
const handlePost = async (data, dispatch) => {
  alert("A");
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Denied");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        handleImageUpload(result.uri);
      }
    }
  }
  async function handleImageUpload(img) {
    const storage = getStorage();
    const name = "image-" + (Math.random() + Math.random()).toString();
    const storageRef = ref(storage, name);

    const image = await fetch(img);
    const bytes = await image.blob();

    uploadBytes(storageRef, bytes).then(() => {
      getDownloadURL(storageRef).then((url) => handlePost(url));
    });
  }
  async function handlePost(url) {
    await setDoc(
      doc(
        db,
        "posts",
        `${data.uid + "-" + (Math.random() + Math.random()).toString()}`
      ),
      {
        img: url,
        username: data.displayName,
        uid: data.uid,
        createDate: Date.now(),
        avatar: data.avatar,
      }
    );
    dispatch(getPosts());
  }
};

export default handlePost;
