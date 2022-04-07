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
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<MessengerStackProps, "messageListScreen">;
};
type targetType = {
  username: string;
  uid: string;
};
const MessageListScreen = ({ navigation }: Props) => {
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
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 12 }}>
      <SearchField value={search} setValue={setSeach} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 12,
        }}
      >
        <Text style={{ fontWeight: "600" }}>Messages</Text>
        <Text style={{ color: "grey" }}>0 requests</Text>
      </View>
      <ScrollView>
        {conversations.map((el: any) => {
          const targetUID = el.members.filter(
            (id: string) => id !== data.uid
          )[0];
          const targetUsername: string = el[targetUID];
          const target: targetType = {
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

const styles = StyleSheet.create({});
