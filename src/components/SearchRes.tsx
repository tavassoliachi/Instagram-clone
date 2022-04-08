import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../Redux/Actions/user/getUserData";
import { AppStateContext } from "../Context";
import getAvatar from "./getAvatar";
import { auth } from "../Firebase-config";
import {
  NavigationProp,
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ISearchResult } from "../types/ReduxTypes";
import {
  SearchStackProps,
  TabNavigationsProps,
} from "../types/NavigationTypes";
interface IProps {
  data: ISearchResult;
}
const SearchRes = ({ data }: IProps) => {
  const currUid: string = auth.currentUser!.uid;

  const dispatch = useDispatch();

  const navigation =
    useNavigation<
      CompositeNavigationProp<
        StackNavigationProp<SearchStackProps, "searchProfile">,
        NavigationProp<TabNavigationsProps, "profile">
      >
    >();

  const { uid, setUID } = useContext(AppStateContext);
  useEffect(() => {
    if (!uid[data.uid]) {
      getAvatar(data.uid, setUID);
    }
  }, []);
  const handlePress = () => {
    data.uid == currUid
      ? navigation.navigate("profile")
      : (navigation.push("searchProfile", {
          search: true,
          uid: data.uid,
        }),
        dispatch(getUserData(data.uid)));
  };
  return (
    <TouchableOpacity style={styles.mainCont} onPress={handlePress}>
      <Image
        style={styles.image}
        source={{
          uri:
            uid[data.uid] ||
            "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png",
        }}
      />
      <Text style={styles.username}>{data.username}</Text>
    </TouchableOpacity>
  );
};

export default SearchRes;

const styles = StyleSheet.create({
  mainCont: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: "#c4c4c4",
    marginRight: 20,
  },
  username: {
    fontWeight: "600",
  },
});
