import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Actions";
import { db } from "../Firebase-config";
import handlePost from "../components/handlePost";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector((el) => el?.addUser.user);
  const [url, setUrl] = useState();
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);

  const uploadPost = async () => {
    const randomName =
      data.uid + "-" + (Math.random() + Math.random()).toString();
    await setDoc(doc(db, "posts", randomName), {
      img: url,
      name: randomName,
      username: data.username,
      uid: data.uid,
      text: text,
      createDate: Date.now(),
      likes: [],
      comments: [],
    });

    navigation.navigate("home");
    dispatch(getPosts());
  };

  useFocusEffect(
    useCallback(() => {
      handlePost(
        (url) => setUrl(url),
        () => navigation.goBack()
      );
      setLoading(true);
      return () => [setUrl(), setText()];
    }, [])
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => navigation.goBack()}
        />
      ),
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
  }, [url, text]);

  const horizontalPadding = 15;
  return (
    <View style={styles.mainCont}>
      <View style={styles.cont1}>
        <View style={styles.cont2}>
          {url && (
            <Image
              style={styles.image}
              onLoadEnd={() => setLoading(false)}
              source={{
                uri: url,
              }}
            />
          )}
          {loading && (
            <ActivityIndicator color="white" style={styles.loading} />
          )}
        </View>
        <TextInput
          placeholder="Write a caption..."
          onChangeText={setText}
          value={text}
          style={styles.input}
        />
      </View>
      <View style={{ ...styles.tagCont, paddingHorizontal: horizontalPadding }}>
        <Text>Tag people</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#494949" />
      </View>
      <View
        style={{ ...styles.locationCont, paddingHorizontal: horizontalPadding }}
      >
        <Text>Add Location</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#c4c4c4" />
      </View>
      <View style={{ paddingHorizontal: horizontalPadding }}>
        {["Facebook", "Twitter", "Tumblr"].map((el) => (
          <View style={styles.socialMedia}>
            <Text>{el}</Text>
            <Switch />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
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
