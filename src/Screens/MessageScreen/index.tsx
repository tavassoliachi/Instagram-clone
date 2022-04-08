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
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect } from "@react-navigation/native";
import { db } from "../../Firebase-config";
import {
  collection,
  query,
  orderBy,
  doc,
  setDoc,
  onSnapshot,
  limit,
  startAfter,
} from "firebase/firestore";
import getAvatar from "../../components/getAvatar";
import { useContext } from "react";
import { AppStateContext } from "../../Context";
import type { RouteProp } from "@react-navigation/native";
import { styles } from "./styles";
import { MessengerStackProps } from "../../types/NavigationTypes";
import Random from "../../components/Random";
interface commentType {
  uid: string;
  text: string;
}
interface IProps {
  route: RouteProp<MessengerStackProps, "message">;
}

const MessageScreen = ({ route }: IProps) => {
  const [text, setText] = useState("");
  const { uid, setUID } = useContext(AppStateContext);
  const [messages, setMessages] = useState<Array<commentType>>([]);
  const [lastDoc, setLastDoc] = useState<Object>();
  const [end, setEnd] = useState(false);
  const currUID: string = route.params.data.members.filter(
    (id: string) => id !== route!.params!.target.uid
  )[0];
  const target: string = route.params.target.uid;

  useFocusEffect(
    React.useCallback(() => {
      if (!uid[currUID]) {
        getAvatar(currUID, setUID);
      }
      if (!uid[target]) {
        getAvatar(target, setUID);
      }
      getMessages();
      return () => setMessages([]);
    }, [target])
  );

  async function getMessages(lastMessage?: Object) {
    const n: number = 5;
    let isUpdateFetch: boolean = false;
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

    onSnapshot(q, (doc: Object) => {
      const { docs }: any = doc;
      let messagesArr: Array<commentType> = [];
      setLastDoc(docs[docs.length - 1]);
      docs.length == 0 && setEnd(true);
      docs.forEach(
        (el: any) =>
          Object.keys(el.data()).length && messagesArr.push(el.data())
      );

      messages
        ? setMessages((prev: Array<commentType>) =>
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
  const RenderLoading = () => {
    if (!end) {
      return <ActivityIndicator />;
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainCont}
      keyboardVerticalOffset={100}
    >
      <View style={styles.subCont}>
        {/* ---------------------------------------- */}
        <FlatList
          onEndReached={() => !end && getMessages(lastDoc)}
          onEndReachedThreshold={0.005}
          style={styles.flatList}
          data={messages}
          inverted={true}
          ListFooterComponent={<ActivityIndicator animating={!end} />}
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
                  alignSelf: isOwner ? "flex-end" : "flex-start",
                  ...styles.renderItem,
                }}
              >
                {!isOwner && imageShow && (
                  <Image
                    source={{
                      uri:
                        uid[el?.uid] ||
                        "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
                    }}
                    style={styles.image}
                  />
                )}

                <View
                  style={{
                    backgroundColor: isOwner ? "blue" : "#c4c4c4",
                    marginLeft: (!isOwner && !imageShow && 50) || 0,
                    ...styles.text,
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

        {/* ---------------------------------------- */}

        <View style={styles.inputCont}>
          <TextInput
            onChangeText={setText}
            value={text}
            style={styles.input}
            placeholder="Message..."
          />

          <View style={styles.cameraIcon}>
            <Ionicons size={25} name="camera" color="white" />
          </View>

          {text.length == 0 ? (
            <View style={styles.iconsCont}>
              <SimpleLineIcons size={25} name="microphone" />
              <EvilIcons size={40} name="image" />
              <MaterialCommunityIcons size={25} name="sticker-emoji" />
            </View>
          ) : (
            <TouchableOpacity style={styles.btn} onPress={handleSend}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;
