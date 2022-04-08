import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { Dispatch } from "react";
import { SetStateAction } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
const SearchField = ({ value, setValue }: Props) => {
  return (
    <View style={styles.cont}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search"
      />
      <AntDesign
        name="search1"
        size={22}
        color="#494949"
        style={styles.searchIcon}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  cont: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    left: 10,
  },
  input: {
    backgroundColor: "#dedede",
    padding: 10,
    paddingLeft: 35,
    borderRadius: 8,
  },
});
