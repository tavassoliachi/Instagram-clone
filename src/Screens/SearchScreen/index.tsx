import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase-config";
import SearchRes from "../../components/SearchRes";
import SearchField from "../../components/SearchField";
import { SearchStackProps } from "../../types/NavigationTypes";
import { NavigationProp } from "@react-navigation/native";
type Props = {
  navigation: NavigationProp<SearchStackProps>;
};
const SearchScreen = ({ navigation }: Props) => {
  const [search, setSeach] = useState<string>("");
  const [results, setResults] = useState<Array<Object>>([]);
  useEffect(() => {
    (async function getSearch() {
      if (search.length < 2) {
        setResults([]);
        return;
      }
      const q = query(
        collection(db, "users"),
        where("searchQuery", "array-contains", `${search}`)
      );
      const a = await getDocs(q);
      let resArr: Array<Object> = [];
      a.forEach((el) => resArr.push(el.data()));
      setResults(resArr);
    })();
  }, [search]);
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 13 }}>
      <SearchField value={search} setValue={setSeach} />

      <View>
        {results && (
          <FlatList
            data={results}
            renderItem={({ item }) => <SearchRes data={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
