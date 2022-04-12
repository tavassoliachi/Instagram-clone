import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Header2 = () => {
  const screenWidth: number = Dimensions.get("window").width;
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.iconsCont}>
        <MaterialCommunityIcons
          name="grid"
          size={25}
          style={{ width: screenWidth / 3, textAlign: "center" }}
        />
        <Ionicons
          name="play-outline"
          size={25}
          style={{ width: screenWidth / 3, textAlign: "center" }}
        />
        <MaterialIcons
          name="portrait"
          size={25}
          style={{ width: screenWidth / 3, textAlign: "center" }}
        />
      </View>
    </View>
  );
};

export default Header2;
