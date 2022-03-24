import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

const PostHeader = ({ data }) => {
  return (
    <View style={styles.cont}>
      <View style={styles.subCont}>
        <Image
          size={45}
          style={{
            width: 45,
            height: 45,
            borderRadius: 45 / 2,
            backgroundColor: "#c4c4c4",
          }}
          source={{
            uri:
              data.section.data[0].avatar ||
              "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
          }}
        />

        <Text style={styles.username}>{data.section.data[0].username}</Text>
      </View>
      <Text style={styles.seeMore}>...</Text>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  subCont: { flexDirection: "row", marginLeft: 8 },
  image: { width: 40, height: 40, borderRadius: 40 / 2 },
  username: { alignSelf: "center", marginLeft: 8, fontWeight: "600" },
  seeMore: {
    marginRight: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
});
