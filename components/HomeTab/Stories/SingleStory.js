import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const SingleStory = () => {
  return (
    <View style={{ margin: 6 }}>
      <View
        style={{
          borderRadius: 50,
          borderColor: "#13f24f",
          borderWidth: 2,
          maxWidth: 77,
        }}
      >
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
          }}
          style={{
            width: 67,
            height: 67,
            borderRadius: 67 / 2,
            margin: 3,
          }}
        />
      </View>
      <Text style={{ textAlign: "center" }}>Username</Text>
    </View>
  );
};

export default SingleStory;

const styles = StyleSheet.create({});
