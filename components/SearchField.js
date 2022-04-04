import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchField = ({ value, setValue }) => {
  return (
    <View style={{ position: "relative" }}>
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
        style={{ position: "absolute", top: 8, left: 10 }}
      />
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#dedede",
    padding: 10,
    paddingLeft: 35,
    borderRadius: 8,
  },
});
