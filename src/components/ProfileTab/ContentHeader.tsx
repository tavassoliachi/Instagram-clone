import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AuthModal from "./AuthModal";
interface Props {
  username: string;
  isSearch: boolean;
}
const ContentHeader = ({ username, isSearch }: Props) => {
  const [modal, setModal] = useState(false);
  const handlePress = () => {
    if (!isSearch) {
      setModal(true);
    }
  };
  return (
    <View style={styles.mainCont}>
      <AuthModal modal={modal} setModal={setModal} />
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.username}>{username}</Text>
        {!isSearch && (
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            style={styles.icon1}
          />
        )}
      </TouchableOpacity>
      <View style={styles.iconCont}>
        <FontAwesome name="plus-square-o" size={25} style={styles.icon2} />
        <Ionicons name="menu-outline" size={25} />
      </View>
    </View>
  );
};

export default ContentHeader;

const styles = StyleSheet.create({
  mainCont: {
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon1: {
    alignSelf: "flex-start",
  },
  iconCont: {
    flexDirection: "row",
  },
  icon2: {
    marginRight: 15,
  },
});
