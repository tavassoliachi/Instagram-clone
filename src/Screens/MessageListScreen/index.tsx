import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchField from "../../components/SearchField";
import Message from "../../components/MessageListScreen/MessageInfo";
import { useSelector } from "react-redux";
import { where, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { MessengerStackProps } from "../../types/NavigationTypes";
import { TRedux } from "../../types/ReduxTypes";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
interface IProps {
  navigation: NavigationProp<MessengerStackProps, "messageListScreen">;
}
type TTargetType = {
  username: string;
  uid: string;
};
const MessageListScreen = ({ navigation }: IProps) => {
  const [search, setSeach] = useState<string>("");
  const [conversations, setConversations] = useState<Array<Object>>([]);
  const data = useSelector((e: TRedux) => e?.addUser?.user);

  useEffect(() => {
    data.uid.length && fetchMessages();
  }, []);

  async function fetchMessages() {
    const q = query(
      collection(db, "messages"),
      where("members", "array-contains", data.uid)
    );

    const { docs } = await getDocs(q);

    const arr: Array<Object> = [];
    docs.forEach((el) => arr.push(el.data()));
    setConversations(arr);
  }
  return (
    <View style={styles.mainCont}>
      <SearchField value={search} setValue={setSeach} />
      <View style={styles.msgCont}>
        <Text style={styles.msg}>Messages</Text>
        <Text style={styles.request}>0 requests</Text>
      </View>
      <ScrollView>
        {conversations.map((el: any) => {
          const targetUID = el.members.filter(
            (id: string) => id !== data.uid
          )[0];
          const targetUsername: string = el[targetUID];
          const target: TTargetType = {
            uid: targetUID,
            username: targetUsername,
          };
          return (
            <TouchableOpacity
              key={el.toString()}
              onPress={() =>
                navigation.navigate("message", { data: el, target: target })
              }
            >
              <Message target={target} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MessageListScreen;
