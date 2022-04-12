import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import ImageHeight from "./functions/ImageHeight";
import { IPostData } from "../../../types/ReduxTypes";
type Props = {
  data: IPostData;
};

const SinglePost = ({ data }: Props) => {
  const [height, setHeight] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    ImageHeight(data.img, setHeight);
  }, []);
  return (
    <View style={styles.contentCont}>
      <Image
        source={{
          uri: `${data.img}`,
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode={"contain"}
        style={{
          height: height,
          ...styles.contentIMG,
        }}
      />
      {loading && (
        <ActivityIndicator
          color="white"
          size="large"
          style={{
            position: "absolute",
            height: height,
            ...styles.contentIMG,
          }}
        />
      )}
    </View>
  );
};

export default SinglePost;
