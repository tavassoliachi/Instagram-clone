import { StyleSheet, Text, View, Image } from "react-native";
import { styles } from "../styles";
import React from "react";

const SingleStory = () => {
  return (
    <View style={styles.storyCont}>
      <View style={styles.storySubCont}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
          }}
          style={styles.storyAvatar}
        />
      </View>
      <Text style={styles.storyUsername}>Username</Text>
    </View>
  );
};

export default SingleStory;
