import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SectionList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header1 from "../components/ProfileTab/Header1";
import Header2 from "../components/ProfileTab/Header2";
import ContentHeader from "../components/ProfileTab/ContentHeader";
import { useSelector } from "react-redux";
const ProfileTab = ({ route }) => {
  const screenWidth = Dimensions.get("window").width;
  const isSearch = route.name == "searchProfile";
  const data = useSelector((el) => el);
  const [userData, setUserData] = useState();
  useEffect(() => {
    isSearch
      ? setUserData(data.searchedProfile.searchedData)
      : setUserData(data.addUser.user);
  }, [data, isSearch]);

  const filteredData = () => {
    let data = Object.fromEntries(
      Object.entries(userData).filter(([key]) => key !== "posts")
    );
    return data;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ContentHeader username={userData?.displayName} />
      {userData && (
        <SectionList
          ListHeaderComponent={() => (
            <Header1
              posts={userData.posts[0].data.length}
              userData={filteredData()}
              isSearch={isSearch}
            />
          )}
          sections={userData.posts}
          keyExtractor={(index, item) => item + index}
          renderSectionHeader={Header2}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          stickySectionHeadersEnabled={true}
          renderItem={({ index, item }) => {
            const margin = { marginRight: (index + 1) % 3 !== 0 ? 1.5 : 0 };
            return (
              <Image
                source={{
                  uri: item.img,
                }}
                style={{
                  ...margin,
                  width: screenWidth / 3 - 1,
                  height: screenWidth / 3 - 1,
                  marginBottom: 1.5,
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({});
