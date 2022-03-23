import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { setDoc, doc } from "firebase/firestore";

const PostHeader = ({ data }) => {
  return (
    <View style={styles.cont}>
      <View style={styles.subCont}>
        <Image
          source={{
            uri: `${data.section.data[0].avatar}`,
          }}
          style={styles.image}
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
  username: { alignSelf: "center", marginLeft: 8 },
  seeMore: {
    marginRight: 20,
    fontWeight: "bold",
    marginTop: 7,
  },
});
