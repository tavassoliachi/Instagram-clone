import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useFocusEffect } from "@react-navigation/native";
import { useContext } from "react";
import { AppStateContext } from "../../Context";
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
    <View style={styles.mainCont}>
      <View style={styles.subCont}>
        <Image
          source={{
            uri:
              uid[target?.uid] ||
              "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
          }}
          style={styles.image}
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

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  subCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usernameCont: {
    flexDirection: "column",
    marginLeft: 15,
  },
  username: { fontWeight: "400", fontSize: 14 },
  seen: { color: "grey", fontSize: 12 },
});
