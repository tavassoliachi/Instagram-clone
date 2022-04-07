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
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri:
              uid[target?.uid] ||
              "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
          }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Text style={{ fontWeight: "400", fontSize: 14 }}>
            {target.username}
          </Text>
          <Text style={{ color: "grey", fontSize: 12 }}>Seen Saturday</Text>
        </View>
      </View>
      <SimpleLineIcons name="camera" size={25} color="grey" />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
