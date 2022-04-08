import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase-config";
import SearchRes from "../../components/SearchRes";
import SearchField from "../../components/SearchField";
import { styles } from "./styles";
import { ISearchResult } from "../../types/ReduxTypes";
// type Props = {
//   navigation: NavigationProp<SearchStackProps>;
// };
const SearchScreen = () => {
  const [search, setSeach] = useState<string>("");
  const [results, setResults] = useState<ISearchResult[]>([]);
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
      let resArr: Array<any> = [];
      a.forEach((el) => resArr.push(el.data()));
      setResults(resArr);
    })();
  }, [search]);
  return (
    <View style={styles.mainCont}>
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
