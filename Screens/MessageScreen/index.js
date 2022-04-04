import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../../Firebase-config";
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  ref,
  collectionGroup,
  setDoc,
  onSnapshot,
  limit,
  startAt,
  limitToLast,
  startAfter,
} from "firebase/firestore";
import getAvatar from "../../components/getAvatar";
import { useContext } from "react";
import { AppStateContext } from "../../Context";
import Random from "../../components/Random";
const MessageScreen = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { uid, setUID } = useContext(AppStateContext);
  const [messages, setMessages] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [end, setEnd] = useState(false);
  const currUID = route.params.data.members.filter(
    (id) => id !== route.params.target.uid
  )[0];
  const target = route.params.target.uid;
  useFocusEffect(
    React.useCallback(() => {
      if (!uid[currUID]) {
        getAvatar(currUID, setUID);
      }
      if (!uid[target.uid]) {
        getAvatar(target.uid, setUID);
      }
      getMessages();
      return () => setMessages([]);
    }, [target])
  );

  async function getMessages(lastMessage) {
    const n = 5;
    let isUpdateFetch = false;
    let q = !lastMessage
      ? query(
          collection(db, `messages/${route.params.data.id}/messages`),
          orderBy("date", "desc"),
          limit(n)
        )
      : query(
          collection(db, `messages/${route.params.data.id}/messages`),
          limit(n),
          orderBy("date", "desc"),
          lastMessage && startAfter(lastMessage)
        );

    onSnapshot(q, (doc) => {
      const { docs } = doc;
      let messagesArr = [];
      setLastDoc(docs[docs.length - 1]);
      docs.length == 0 && setEnd(true);
      docs.forEach(
        (el) => Object.keys(el.data()).length && messagesArr.push(el.data())
      );

      messages
        ? setMessages((prev) =>
            isUpdateFetch
              ? [...messagesArr, ...prev]
              : [...prev, ...messagesArr]
          )
        : setMessages(messagesArr);
      q = query(
        collection(db, `messages/${route.params.data.id}/messages`),
        orderBy("date", "desc"),
        limit(1)
      );
      isUpdateFetch = true;
    });
    // onSnapshot(q, function (querySnapshot) {
    //   console.log(Object.keys(querySnapshot.metadata));
    //   // querySnapshot.docChanges.forEach(function (change) {
    //   //   console.log(change);
    //   // });
    // });
  }

  const handleSend = async () => {
    let msg = text;
    setText("");
    const docId = route.params.data.id;
    const randomId = Random();

    await setDoc(doc(db, `messages/${docId}/messages`, randomId), {
      date: Date.now(),
      seen: false,
      text: msg,
      uid: currUID,
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
          height: 900,
        }}
      >
        {/* ---------------------------------------- */}
        <FlatList
          onEndReached={() => !end && getMessages(lastDoc)}
          onEndReachedThreshold={0.005}
          style={{ width: "100%" }}
          data={messages}
          inverted={true}
          ListFooterComponent={() => !end && <ActivityIndicator />}
          renderItem={({ item, index }) => {
            let el = item;
            const isOwner = currUID == el.uid;
            const imageShow =
              index !== 0
                ? messages[index - 1].uid == el.uid
                  ? false
                  : true
                : true;
            return (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: isOwner ? "flex-end" : "flex-start",
                }}
              >
                {!isOwner && imageShow && (
                  <Image
                    source={{
                      uri:
                        uid[el?.uid] ||
                        "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
                    }}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 35 / 2,
                      marginRight: 15,
                    }}
                  />
                )}

                <View
                  style={{
                    backgroundColor: isOwner ? "blue" : "#c4c4c4",
                    borderRadius: 20,
                    padding: 10,
                    marginLeft: !isOwner && !imageShow && 50,
                  }}
                >
                  <Text style={{ color: isOwner ? "white" : "black" }}>
                    {el.text}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        {/* {messages?.map((el) => {
          const isOwner = currUID == el.uid;
          return (
            <View
              style={{
                marginTop: 20,
                alignSelf: "flex-start",
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: isOwner ? "flex-end" : "flex-start",
              }}
            >
              {!isOwner && (
                <Image
                  source={{
                    uri:
                      uid[el?.uid] ||
                      "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
                  }}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35 / 2,
                    marginRight: 15,
                  }}
                />
              )}

              <View
                style={{
                  backgroundColor: isOwner ? "blue" : "#c4c4c4",
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <Text style={{ color: isOwner ? "white" : "black" }}>
                  {el.text}
                </Text>
              </View>
            </View>
          );
        })} */}

        {/* ---------------------------------------- */}

        <View
          style={{
            // position: "absolute",
            // bottom: 0,
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            onChangeText={setText}
            value={text}
            style={{
              width: "100%",
              backgroundColor: "#dedede",
              height: 40,
              borderRadius: 20,
              paddingLeft: 45,
            }}
            placeholder="Message..."
          />

          <View
            style={{
              backgroundColor: "#4f92d1",
              width: 35,
              height: 35,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 35 / 2,
              // marginLeft: 3,
              position: "absolute",
              left: 3,
            }}
          >
            <Ionicons size={25} name="camera" color="white" />
          </View>

          {text.length == 0 ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 100,
                position: "absolute",
                right: 20,
                justifyContent: "space-between",
              }}
            >
              <SimpleLineIcons size={25} name="microphone" />
              <EvilIcons size={40} name="image" />
              <MaterialCommunityIcons size={25} name="sticker-emoji" />
            </View>
          ) : (
            <TouchableOpacity
              style={{
                alignItems: "center",
                position: "absolute",
                right: 20,
              }}
              onPress={handleSend}
            >
              <Text style={{ fontWeight: "700", color: "green" }}>Send</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
