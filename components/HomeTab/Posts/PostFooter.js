import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth } from "../../../Firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../Redux/Actions";
const PostFooter = ({ data }) => {
  const dispatch = useDispatch();
  const postData = data?.section.data[0];
  const likes = postData.likes.includes(auth.currentUser.uid);
  const commentsN = postData.comments.length;
  const handlePress = async () => {
    const currUID = auth.currentUser.uid;
    const newData = likes
      ? [...postData.likes?.filter((el) => el !== currUID)]
      : [...postData?.likes, currUID];
    await setDoc(
      doc(db, "posts", postData.name),
      {
        likes: newData,
      },
      { merge: true }
    );
    dispatch(getPosts());
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "30%",
        }}
      >
        <FontAwesome
          name={likes ? "heart" : "heart-o"}
          color={likes ? "red" : "black"}
          size={25}
          onPress={handlePress}
        />
        <Feather name="message-circle" size={25} />
        <Ionicons name="paper-plane-outline" size={25} />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "600" }}>{postData.likes.length} likes</Text>
        <Text>
          <Text style={{ fontWeight: "600" }}>Username</Text> Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text.
        </Text>
      </View>
      {commentsN > 0 && (
        <Text style={{ color: "gray", paddingHorizontal: 10 }}>
          View all {commentsN} comments
        </Text>
      )}
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
