import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
const LoadingScreen = () => {
  return (
    <View style={styles.mainCont}>
      <View style={{ height: "85%", justifyContent: "center" }}>
        <Image
          source={require("../../assets/Instagram-logo.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.txt}>from</Text>
        <Image
          source={require("../../assets/meta-logo.png")}
          style={styles.metaImage}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;
