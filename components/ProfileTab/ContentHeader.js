import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
const ContentHeader = ({ username }) => {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{username}</Text>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome
          name="plus-square-o"
          size={25}
          style={{ marginRight: 15 }}
        />
        <Ionicons name="menu-outline" size={25} />
      </View>
    </View>
  );
};

export default ContentHeader;

const styles = StyleSheet.create({});
