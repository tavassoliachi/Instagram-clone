import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
const PostFooter = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "30%",
        }}
      >
        <Feather name="heart" size={25} />
        <Feather name="message-circle" size={25} />
        <Ionicons name="paper-plane-outline" size={25} />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "600" }}>655 likes</Text>
        <Text>
          <Text style={{ fontWeight: "600" }}>Username</Text> Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text.
        </Text>
      </View>
      <Text style={{ color: "gray", paddingHorizontal: 10 }}>
        View all 7 comments
      </Text>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
