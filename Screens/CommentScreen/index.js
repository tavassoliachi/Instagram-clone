import {
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { db } from "../../Firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { getPosts } from "../../Redux/Actions/user/getPosts";
import { useDispatch } from "react-redux";
import RenderComment from "../../components/RenderComment";
import getAvatar from "../../components/getAvatar";
import { AppStateContext } from "../../Context";
import { styles } from "./styles";
const CommentScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const data = route.params.data;
  const reduxData = useSelector((el) => el);
  const currUser = reduxData.addUser?.user;
  const currPost = reduxData?.posts?.recentPosts.filter(
    (el) => el.data[0].name == data.name
  )[0].data[0];

  navigation.setOptions({
    headerRight: () => (
      <Ionicons
        name="paper-plane-outline"
        size={25}
        style={{ marginRight: 15 }}
      />
    ),
  });

  const handlePost = async () => {
    let newData = [
      ...data.comments,
      {
        uid: currUser.uid,
        username: currUser.username,
        text: comment,
        createDate: Date.now(),
        likes: [],
        replies: [],
      },
    ];

    await setDoc(
      doc(db, "posts", data.name),
      {
        comments: newData,
      },
      { merge: true }
    );
    setComment("");
    dispatch(getPosts());
  };

  const { uid, setUID } = useContext(AppStateContext);
  useEffect(() => {
    if (!uid[currUser.uid]) {
      getAvatar(currUser.uid, setUID);
    }
  }, []);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainCont}
    >
      <ScrollView>
        {currPost.text && <RenderComment data={data} type="owner" />}
        {currPost?.comments?.map((el) => (
          <RenderComment data={el} />
        ))}
      </ScrollView>
      <View style={styles.cont}>
        <Image
          source={{
            uri:
              uid[currUser.uid] ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          style={styles.avatar}
        />
        <View style={styles.inputCont}>
          <TextInput
            placeholder="Add a comment..."
            value={comment}
            onChangeText={setComment}
          />

          <Text
            style={{ ...styles.submit, opacity: comment.length ? 1 : 0.4 }}
            onPress={handlePost}
          >
            Post
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CommentScreen;
