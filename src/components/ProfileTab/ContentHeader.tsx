import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";
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
    <View style={styles.headerCont}>
      <AuthModal modal={modal} setModal={setModal} />
      <TouchableOpacity style={styles.headerBTN} onPress={handlePress}>
        <Text style={styles.headerUsername}>{username}</Text>
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
