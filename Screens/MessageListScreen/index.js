import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase-config";
import SearchField from "../../components/SearchField";
import Message from "../../components/MessageListScreen/MessageInfo";
import { useSelector } from "react-redux";
import {
  where,
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  ref,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../../Firebase-config";
import { useContext } from "react";
import { AppStateContext } from "../../Context";
const MessageListScreen = ({ navigation }) => {
  const [search, setSeach] = useState("");
  const [conversations, setConversations] = useState([]);
  const data = useSelector((e) => e?.addUser?.user);
  // const messages = fetchMessages();
  // const currUser = useContext(AppStateContext);
  // console.log(currUser);
  // useEffect(() => {
  //   data?.uid?.length && alert("a");
  // }, [data]);
  useEffect(() => {
    data.uid.length && fetchMessages();
  }, []);

  async function fetchMessages() {
    // const q = query();
    // const b = query(collection(q, "messages"));
    // data.forEach((el) => messages.push(el.data()));

    const q = query(
      collection(db, "messages"),
      where("members", "array-contains", data.uid)
    );

    const { docs } = await getDocs(q);

    const arr = [];
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
      <ScrollView showsVerticalScrollIndicator="false">
        {conversations.map((el) => {
          const targetUID = el.members.filter((id) => id !== data.uid)[0];
          const targetUsername = el[targetUID];
          const target = { uid: targetUID, username: targetUsername };
          return (
            <TouchableOpacity
              key={el}
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
