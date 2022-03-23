import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import PostHeader from "./PostHeader";

const SinglePost = ({ data }) => {
  const [height, setHeight] = useState();
  useEffect(() => {
    Image.getSize(`${data.img}`, (width, height) => {
      let screenWidth = Dimensions.get("window").width;
      let scaleFactor = width / screenWidth;
      let imageHeight = height / scaleFactor;
      setHeight(imageHeight);
    });
  }, []);
  return (
    <View style={{ marginVertical: 5 }}>
      <Image
        source={{
          uri: `${data.img}`,
        }}
        resizeMode={"contain"}
        style={{
          height: height,
          ...styles.image,
        }}
      />
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    marginVertical: 10,
    width: "100%",
  },
});
