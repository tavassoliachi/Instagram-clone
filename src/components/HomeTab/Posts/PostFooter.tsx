import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth } from "../../../Firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../Redux/Actions/user/getPosts";
import { useNavigation } from "@react-navigation/native";
import { getDate } from "../../getTime";
import { IPostData } from "../../../types/ReduxTypes";

type navType = {
  push: (screen: string, payload: object) => void;
};
type Props = {
  data: {
    section: {
      data: Array<IPostData>;
    };
  };
};

const PostFooter = ({ data }: Props) => {
  const [date, setDate] = useState("");
  const [like, setLike] = useState(false);
  const [likeN, setLikeN] = useState(0);

  const navigation: navType = useNavigation();
  const dispatch = useDispatch();

  const postData: IPostData = data.section.data[0];

  const commentsN: number = postData?.comments!.length;

  const handlePress = async () => {
    const status = like;

    setLikeN((prev) => (like ? prev - 1 : prev + 1));
    setLike(!like);

    const currUID: string = auth.currentUser?.uid || "";
    const newData = status
      ? [...postData.likes.filter((el: string) => el !== currUID)]
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
  useEffect(() => {
    let { title, value } = getDate(postData.createDate);
    setDate(`${value + " " + title + " ago"}`);
    postData.likes.includes(auth.currentUser!.uid) && setLike(true);
    setLikeN(postData.likes.length);
  }, []);
  return (
    <View style={styles.mainCont}>
      <View style={styles.icons}>
        <View style={styles.iconsSubCont}>
          <FontAwesome
            name={like ? "heart" : "heart-o"}
            color={like ? "red" : "black"}
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

      <Text style={styles.likes}>{likeN} likes</Text>

      <Text style={styles.usernameCont}>
        <Text style={styles.username}>{postData.username}</Text> {postData.text}
      </Text>

      {commentsN > 0 && (
        <Text
          style={styles.comment}
          onPress={() => navigation.push("commentScreen", { data: postData })}
        >
          View all {commentsN} comments
        </Text>
      )}
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  mainCont: {
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
});
