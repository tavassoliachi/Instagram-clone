import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";

const SinglePost = ({ data }) => {
  const [height, setHeight] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    Image.getSize(`${data.img}`, (width, height) => {
      let screenWidth = Dimensions.get("window").width;
      let scaleFactor = width / screenWidth;
      let imageHeight = height / scaleFactor;
      setHeight(imageHeight);
    });
  }, []);
  return (
    <View
      style={{ marginVertical: 12, minHeight: 250, backgroundColor: "#c4c4c4" }}
    >
      <Image
        source={{
          uri: `${data.img}`,
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        resizeMode={"contain"}
        style={{
          height: height,
          ...styles.image,
        }}
      />
      {loading && (
        <ActivityIndicator
          color="white"
          size="large"
          style={{
            position: "absolute",
            backgroundColor: "#dedede",
            height: height,
            ...styles.image,
          }}
        />
      )}
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    backgroundColor: "#c4c4c4",
  },
});
