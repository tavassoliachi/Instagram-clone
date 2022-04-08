import { StyleSheet, View, Image, Dimensions, SectionList } from "react-native";
import React, { useEffect, useState } from "react";
import Header1 from "../../components/ProfileTab/Header1";
import Header2 from "../../components/ProfileTab/Header2";
import ContentHeader from "../../components/ProfileTab/ContentHeader";
import { useDispatch, useSelector } from "react-redux";
import { RouteProp } from "@react-navigation/native";
import { DispatchType } from "../../types/ReduxTypes";
import { IProfileWithPosts } from "../../types/ReduxTypes";
import { searchEnum } from "../../types/ReduxTypes";
import { TabNavigationsProps } from "../../types/NavigationTypes";
import { SearchStackProps } from "../../types/NavigationTypes";
import { styles } from "./styles";
import { TRedux } from "../../types/ReduxTypes";

interface IProps {
  route:
    | RouteProp<SearchStackProps, "searchProfile">
    | RouteProp<TabNavigationsProps, "profile">;
}

const ProfileScreen = ({ route }: IProps) => {
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

  useEffect(() => {
    return () => dispatch({ type: searchEnum.detach });
  }, []);

  return (
    <View style={styles.mainCont}>
      {userData?.username && (
        <ContentHeader username={userData.username} isSearch={isSearch} />
      )}
      {userData && (
        <SectionList
          ListHeaderComponent={() => (
            <Header1 userData={userData} isSearch={isSearch} />
          )}
          sections={userData.posts}
          keyExtractor={(index, item) => item.toString() + index}
          renderSectionHeader={Header2}
          contentContainerStyle={styles.sectionList}
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
                  ...styles.renderItem,
                  width: screenWidth / 3 - 1,
                  height: screenWidth / 3 - 1,
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
