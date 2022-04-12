import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useFocusEffect } from "@react-navigation/native";
import { useContext } from "react";
import { AppStateContext } from "../../Context";
import { styles } from "./styles";
import getAvatar from "../getAvatar";
interface Props {
  target: {
    uid: string;
    username: string;
  };
}
const Message = ({ target }: Props) => {
  const { uid, setUID } = useContext(AppStateContext);

  useFocusEffect(
    React.useCallback(() => {
      if (!uid[target.uid]) {
        getAvatar(target.uid, setUID);
      }
    }, [])
  );

  return (
    <View style={styles.msgCont}>
      <View style={styles.msgSubcont}>
        <Image
          source={{
            uri:
              uid[target?.uid] ||
              "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
          }}
          style={styles.msgAvatar}
        />
        <View style={styles.usernameCont}>
          <Text style={styles.username}>{target.username}</Text>
          <Text style={styles.seen}>Seen Saturday</Text>
        </View>
      </View>
      <SimpleLineIcons name="camera" size={25} color="grey" />
    </View>
  );
};

export default Message;
