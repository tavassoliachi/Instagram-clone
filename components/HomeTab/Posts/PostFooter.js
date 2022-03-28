import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth } from "../../../Firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../Redux/Actions";
import { useNavigation } from "@react-navigation/native";
import { getDate } from "../../getTime";
const PostFooter = ({ data }) => {
  const navigation = useNavigation();
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
  const [date, setDate] = useState("");
  useEffect(() => {
    let { title, value } = getDate(postData.createDate);
    setDate(`${value + " " + title + " ago"}`);
  }, []);
  return (
    <View
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <FontAwesome
            name={likes ? "heart" : "heart-o"}
            color={likes ? "red" : "black"}
            size={25}
            onPress={handlePress}
          />
          <Feather
            name="message-circle"
            size={25}
            onPress={() => navigation.push("commentScreen", { data: postData })}
          />
          <Ionicons name="paper-plane-outline" size={25} />
        </View>

        <FontAwesome name="bookmark-o" size={25} />
      </View>

      <Text style={{ fontWeight: "600", marginBottom: 5 }}>
        {postData.likes.length} likes
      </Text>

      <Text style={{ marginBottom: 5 }}>
        <Text style={{ fontWeight: "600" }}>{postData.username}</Text>{" "}
        {postData.text}
      </Text>

      {commentsN > 0 && (
        <Text style={{ color: "gray", marginBottom: 5 }}>
          View all {commentsN} comments
        </Text>
      )}
      <Text style={{ color: "gray", fontSize: 12, marginBottom: 10 }}>
        {date}
      </Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
