import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { auth } from "../../../Firebase-config";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { getDate } from "../../getTime";
import { PostLike } from "./functions/PostLike";
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

  const postData: IPostData = data.section.data[0];

  const commentsN: number = postData?.comments!.length;

  const handlePress = async () => {
    PostLike(like, setLike, setLikeN, postData);
  };

  useEffect(() => {
    let { title, value } = getDate(postData.createDate);
    setDate(`${value + " " + title + " ago"}`);
    postData.likes.includes(auth.currentUser!.uid) && setLike(true);
    setLikeN(postData.likes.length);
  }, []);
  return (
    <View style={styles.footerCont}>
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
