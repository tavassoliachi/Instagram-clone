import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getDate } from "./getTime";
import Feather from "react-native-vector-icons/Feather";
import getAvatar from "./getAvatar";
import { useContext } from "react";
import { IComment } from "../types/ReduxTypes";
import { AppStateContext } from "../Context";
interface IProps {
  data: IComment;
  type?: string;
}
const RenderComment = ({ data, type }: IProps) => {
  const owner = (type && type == "owner") || false;
  const [date, setDate] = useState("");
  const { uid, setUID } = useContext(AppStateContext);
  useEffect(() => {
    let { title, value } = getDate(data.createDate);
    setDate(`${value + title[0]}`);
    if (!uid[data.uid]) {
      getAvatar(data.uid, setUID);
    }
  }, []);

  return (
    <View style={{ ...styles.commentCont, borderBottomWidth: owner ? 1 : 0 }}>
      <View style={styles.imgCont}>
        <Image
          source={{
            uri:
              uid[data.uid] ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.dataCont}>
        <Text style={styles.usernameCont}>
          <Text style={styles.username}>{data?.username + "  "}</Text>
          {data?.text}
        </Text>
        <View style={styles.comDetailCont}>
          <Text style={styles.date}>{date}</Text>
          {owner ? (
            <Text style={styles.txt}>See Translation</Text>
          ) : (
            <Text style={styles.txt}>Reply</Text>
          )}
        </View>
      </View>
      {!owner && (
        <Feather name="heart" size={15} style={styles.heart} color="#c4c4c4" />
      )}
    </View>
  );
};

export default RenderComment;

const styles = StyleSheet.create({
  commentCont: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 3,
    paddingVertical: 13,
    borderBottomColor: "#ededed",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#c4c4c4",
  },
  txt: {
    paddingLeft: 20,
    color: "gray",
    fontSize: 12,
    fontWeight: "700",
  },
  imgCont: {
    width: "10%",
    marginRight: 10,
  },
  dataCont: {
    width: "84%",
    flexDirection: "column",
  },
  usernameCont: {
    fontSize: 13,
    width: "93%",
  },
  username: {
    fontWeight: "600",
  },
  comDetailCont: {
    flexDirection: "row",
    paddingTop: 5,
  },
  date: {
    color: "gray",
    fontSize: 12,
  },
  heart: {
    position: "absolute",
    right: 20,
    top: 25,
  },
});
