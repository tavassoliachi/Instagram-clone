import { StyleSheet, Text, FlatList, View, Image } from "react-native";
import React from "react";
import SingleStory from "./SingleStory";
const Stories = () => {
  const users: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <View>
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(el) => el}
        renderItem={() => <SingleStory />}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({});
