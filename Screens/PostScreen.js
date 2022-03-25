import {
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
  TextInput,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { getPosts } from "../Redux/Actions";
import { db } from "../Firebase-config";
import handlePost from "../components/handlePost";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const PostScreen = ({ navigation }) => {
  //headerRight: () => (
  //     <View>
  //   <Text
  //     style={{
  //       color: "#489cf0",
  //       marginRight: 10,
  //       fontWeight: "700",
  //       fontSize: 15,
  //     }}
  //   >
  //     Share
  //   </Text>
  // </View>
  //   ),
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={uploadPost}>
        <Text
          style={{
            color: "#489cf0",
            marginRight: 10,
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          Share
        </Text>
      </TouchableOpacity>
    ),
  });
  const dispatch = useDispatch();
  const data = useSelector((el) => el?.addUser.user);
  const [url, setUrl] = useState();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const uploadPost = async () => {
    const randomName =
      data.uid + "-" + (Math.random() + Math.random()).toString();
    await setDoc(doc(db, "posts", randomName), {
      img: url,
      name: randomName,
      username: data.displayName,
      uid: data.uid,
      text: text,
      createDate: Date.now(),
      likes: [],
      comments: [],
      avatar: data.avatar || "",
    });
    dispatch(getPosts());
    navigation.goBack();
  };
  useEffect(() => {
    handlePost(
      (url) => [setUrl(url), uploadPost(url)],
      () => navigation.goBack()
    );
    setLoading(true);
  }, []);
  const horizontalPadding = 15;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            width: 90,
            height: 80,
            backgroundColor: "#c4c4c4",
            alignItems: "center",
          }}
        >
          {url && (
            <Image
              style={{
                width: 90,
                height: 80,
                resizeMode: "contain",
              }}
              onLoadEnd={() => setLoading(false)}
              source={{
                uri: url,
              }}
            />
          )}
          {loading && (
            <ActivityIndicator
              color="white"
              style={{
                width: 80,
                height: 80,
                position: "absolute",
              }}
            />
          )}
        </View>
        <TextInput
          placeholder="Write a caption..."
          onChangeText={setText}
          value={text}
          style={{
            width: "80%",
            alignSelf: "flex-start",
            flex: 1,
            padding: 10,
            flexWrap: "wrap",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderColor: "#c4c4c4",
          paddingVertical: 13,
          paddingHorizontal: horizontalPadding,
          alignItems: "center",
        }}
      >
        <Text>Tag people</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#494949" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderColor: "#c4c4c4",
          paddingVertical: 13,
          paddingHorizontal: horizontalPadding,
          alignItems: "center",
        }}
      >
        <Text>Add Location</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#c4c4c4" />
      </View>
      <View style={{ paddingHorizontal: horizontalPadding }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Facebook</Text>
          <Switch />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Twitter</Text>
          <Switch />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Tumblr</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({});
