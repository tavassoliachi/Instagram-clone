import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase-config";
import { useDispatch } from "react-redux";
import { getSearchedProfile } from "../Redux/Actions";
import { getUserData } from "../Redux/Actions";
import { auth } from "../Firebase-config";
const SearchTab = ({ navigation }) => {
  const dispatch = useDispatch();
  const [search, setSeach] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async function getSearch() {
      if (search.length < 2) {
        return;
      }
      const q = query(
        collection(db, "users"),
        where("searchQuery", "array-contains", `${search}`)
      );
      const a = await getDocs(q);
      let resArr = [];
      a.forEach((el) => resArr.push(el.data()));
      setResults(resArr);
    })();
  }, [search]);
  const currUid = auth.currentUser.uid;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ position: "relative", margin: 20 }}>
        <TextInput
          style={{
            backgroundColor: "#dedede",
            padding: 10,
            paddingLeft: 35,
            borderRadius: 5,
          }}
          value={search}
          onChangeText={setSeach}
          placeholder="Search"
        />
        <AntDesign
          name="search1"
          size={22}
          color="#494949"
          style={{ position: "absolute", top: 8, left: 10 }}
        />
        {results && (
          <FlatList
            data={results}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  item.uid == currUid
                    ? navigation.navigate("profile")
                    : (navigation.push("searchProfile", {
                        search: true,
                        uid: item.uid,
                      }),
                      dispatch(getUserData(item.uid)))
                }
                style={{
                  marginVertical: 5,
                  padding: 20,
                  backgroundColor: "#dedede",
                }}
              >
                <Text>{item.username}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SearchTab;

const styles = StyleSheet.create({});
