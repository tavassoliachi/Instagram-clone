import {
  View,
  Image,
  Text,
  TextInput,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../Redux/Actions/user/getPosts";
import { db } from "../../Firebase-config";
import handlePost from "../../components/handlePost";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import RandomID from "../../components/Random";
import { styles } from "./styles";
import { NavigationProp } from "@react-navigation/native";
import { TRedux } from "../../types/ReduxTypes";
import { TabNavigationsProps } from "../../types/NavigationTypes";
type Props = {
  navigation: NavigationProp<TabNavigationsProps>;
};
const PostScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const data = useSelector((el: TRedux) => el?.addUser.user);
  const [url, setUrl] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const uploadPost = async () => {
    const randomName = RandomID();
    await setDoc(doc(db, "posts", randomName), {
      img: url,
      name: randomName,
      username: data.username,
      uid: data.uid,
      text: text || "",
      createDate: Date.now(),
      likes: [],
      comments: [],
    });

    navigation.navigate("home");
    dispatch(getPosts());
  };

  useFocusEffect(
    useCallback(() => {
      handlePost(
        (url) => setUrl(url),
        () => navigation.goBack()
      );
      setLoading(true);
      return () => [setUrl(""), setText("")];
    }, [])
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <TouchableOpacity onPress={uploadPost}>
          <Text
            style={{
              color: "#489cf0",
              marginRight: 10,
              fontWeight: "700",
              fontSize: 15,
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [url, text]);

  const horizontalPadding = 15;
  return (
    <View style={styles.mainCont}>
      <View style={styles.cont1}>
        <View style={styles.cont2}>
          {url.length > 0 && (
            <Image
              style={styles.image}
              onLoadEnd={() => setLoading(false)}
              source={{
                uri: url,
              }}
            />
          )}
          {loading && (
            <ActivityIndicator color="white" style={styles.loading} />
          )}
        </View>
        <TextInput
          placeholder="Write a caption..."
          onChangeText={setText}
          value={text}
          style={styles.input}
        />
      </View>
      <View style={{ ...styles.tagCont, paddingHorizontal: horizontalPadding }}>
        <Text>Tag people</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#494949" />
      </View>
      <View
        style={{ ...styles.locationCont, paddingHorizontal: horizontalPadding }}
      >
        <Text>Add Location</Text>
        <MaterialIcons name="arrow-forward-ios" size={15} color="#c4c4c4" />
      </View>
      <View style={{ paddingHorizontal: horizontalPadding }}>
        {["Facebook", "Twitter", "Tumblr"].map((el: string) => (
          <View style={styles.socialMedia}>
            <Text>{el}</Text>
            <Switch />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PostScreen;
