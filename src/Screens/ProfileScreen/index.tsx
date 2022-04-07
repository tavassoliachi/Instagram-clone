import { StyleSheet, View, Image, Dimensions, SectionList } from "react-native";
import React, { useEffect, useState } from "react";
import Header1 from "../../components/ProfileTab/Header1";
import Header2 from "../../components/ProfileTab/Header2";
import ContentHeader from "../../components/ProfileTab/ContentHeader";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType } from "../../types/ReduxTypes";
import { actionType } from "../../Redux/types";
import { IProfileWithPosts } from "../../types/ReduxTypes";
import { searchEnum } from "../../types/ReduxTypes";
import { TRedux } from "../../types/ReduxTypes";

type Props = {
  route: {
    name: string;
  };
};

const ProfileScreen = ({ route }: Props) => {
  const screenWidth = Dimensions.get("window").width;
  const dispatch = useDispatch<DispatchType>();
  const isSearch = route.name == "searchProfile";
  const data = useSelector((el: TRedux) => el);
  const [userData, setUserData] = useState<IProfileWithPosts>();
  useEffect(() => {
    isSearch
      ? setUserData(data.searchedProfile.searchedData)
      : setUserData(data.addUser.user);
  }, [data, isSearch]);

  //@ts-ignore
  useEffect(() => {
    return () => dispatch({ type: searchEnum.detach });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {userData?.username && (
        <ContentHeader username={userData.username} isSearch={isSearch} />
      )}
      {userData && (
        <SectionList
          ListHeaderComponent={() => (
            <Header1 userData={userData} isSearch={isSearch} />
          )}
          sections={userData.posts}
          //@ts-ignore
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

export default ProfileScreen;

const styles = StyleSheet.create({});
