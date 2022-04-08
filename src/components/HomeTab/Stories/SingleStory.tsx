import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SingleStory = () => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.subCont}>
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.username}>Username</Text>
    </View>
  );
};

export default SingleStory;

const styles = StyleSheet.create({
  mainCont: {
    margin: 6,
  },
  subCont: {
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 2,
    maxWidth: 77,
  },
  image: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2,
    margin: 3,
  },
  username: {
    textAlign: "center",
  },
});
