import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import getAvatar from "../../getAvatar";
import { useContext } from "react";
import { styles } from "../styles";
import { IPostData } from "../../../types/ReduxTypes";
import { AppStateContext } from "../../../Context";
type Props = {
  data: {
    section: {
      data: Array<IPostData>;
    };
  };
};

const PostHeader = ({ data }: Props) => {
  const postData = data.section.data[0];
  const { uid, setUID } = useContext(AppStateContext);
  useEffect(() => {
    if (!uid[postData.uid]) {
      getAvatar(postData.uid, setUID);
    }
  }, []);
  return (
    <View style={styles.headerCont}>
      <View style={styles.headerSubCont}>
        <Image
          style={styles.image}
          source={{
            uri:
              uid[postData.uid] ||
              "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
          }}
        />

        <Text style={styles.username}>{postData.username}</Text>
      </View>
      <Text style={styles.seeMore}>...</Text>
    </View>
  );
};

export default PostHeader;
