import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View style={styles.mainCont}>
      <View style={{ height: "85%", justifyContent: "center" }}>
        <Image
          source={require("../assets/Instagram-logo.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.txt}>from</Text>
        <Image
          source={require("../assets/meta-logo.png")}
          style={styles.metaImage}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 70,
  },
  txt: {
    textAlign: "center",
    color: "#c4c4c4",
    fontWeight: "500",
    fontSize: 15,
  },
  metaImage: {
    height: 40,
    resizeMode: "contain",
    bottom: 0,
    right: 0,
  },
});
