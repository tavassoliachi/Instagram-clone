import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Header2 = () => {
  const screenWidth = Dimensions.get("window").width;

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

const styles = StyleSheet.create({
  iconsCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#c4c4c4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
  },
});
