import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleFollow } from "./functions/handleFollow";
import { handleUnfollow } from "./functions/handleUnfollow";
import { useContext } from "react";
import getAvatar from "../getAvatar";
import { AppStateContext } from "../../Context";
import { changeAvatar } from "./functions/changeAvatar";
import { TRedux, IProfileWithPosts } from "../../types/ReduxTypes";
import { FollowState } from "./functions/FollowState";
import { styles } from "./styles";

interface Props {
  isSearch: boolean;
  userData: IProfileWithPosts;
}

type FollowInfo = {
  uid: string;
  username: string;
};
const Header1 = ({ userData, isSearch }: Props) => {
  const [avatarLoading, setAvatarLoading] = useState<boolean>(false);
  const { uid, setUID } = useContext(AppStateContext);
  const { searchedProfile, addUser } = useSelector((data: TRedux) => data);
  const followState = FollowState(addUser.user.following, userData.uid);
  const dispatch = useDispatch();

  const posts = isSearch
    ? searchedProfile?.searchedData?.posts
      ? searchedProfile?.searchedData?.posts[0]?.data
      : []
    : addUser.user.posts[0]?.data;

  const handleClick = async () => {
    followState == "Follow"
      ? handleFollow(userData, addUser.user, dispatch)
      : handleUnfollow(userData, addUser.user, dispatch);
  };

  const handleAvatarChange = () => {
    changeAvatar(isSearch, setAvatarLoading, userData.uid, setUID, uid);
  };

  useEffect(() => {
    if (!uid[userData.uid]) {
      getAvatar(userData.uid, setUID);
    }
  }, []);

  return (
    <View>
      <View style={styles.header1Cont}>
        <View style={styles.header1Subcont}>
          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={handleAvatarChange}>
              <Image
                style={styles.avatar}
                onLoadStart={() =>
                  avatarLoading == false && setAvatarLoading(true)
                }
                onLoadEnd={() => setAvatarLoading(false)}
                source={{
                  uri: `${
                    uid[userData.uid] ||
                    "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png"
                  }`,
                }}
              />
            </TouchableOpacity>

            {avatarLoading && (
              <ActivityIndicator color="white" style={styles.loading} />
            )}

            <Text style={styles.username}>{userData.username}</Text>
          </View>
        </View>
        <View style={styles.profileDetails}>
          {[
            { num: posts.length, title: "Posts" },
            { num: userData.followers?.length || 0, title: "Followers" },
            { num: userData.following?.length || 0, title: "Following" },
          ].map((el) => (
            <View style={styles.followNum} key={el.title}>
              <Text style={styles.title}>{el.num}</Text>
              <Text style={styles.txt}>{el.title}</Text>
            </View>
          ))}
        </View>
      </View>
      {isSearch ? (
        <TouchableOpacity
          style={{ ...styles.editProfile }}
          onPress={handleClick}
        >
          <Text style={styles.followState}>{followState}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editTXT}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header1;
