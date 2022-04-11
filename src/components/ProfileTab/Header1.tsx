import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { handleFollow } from "./components/handleFollow";
import { handleUnfollow } from "./components/handleUnfollow";
import handlePost from "../handlePost";
import { useContext } from "react";
import getAvatar from "../getAvatar";
import { AppStateContext } from "../../Context";
import { TRedux } from "../../types/ReduxTypes";
import { IProfileWithPosts } from "../../types/ReduxTypes";
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
  const data = useSelector((data: TRedux) => data);
  const dispatch = useDispatch();
  const posts = isSearch
    ? data.searchedProfile?.searchedData?.posts
      ? data.searchedProfile?.searchedData?.posts[0]?.data
      : []
    : data.addUser.user.posts[0]?.data;
  const { uid, setUID } = useContext(AppStateContext);
  const handleClick = async () => {
    followState == "Follow"
      ? handleFollow(userData, data.addUser.user, dispatch)
      : handleUnfollow(userData, data.addUser.user, dispatch);
  };

  const handlePress = async () => {
    if (isSearch) {
      return;
    }
    setTimeout(() => {
      setAvatarLoading(true);
    }, 1000);
    handlePost(changeAvatar, () => setAvatarLoading(false));
  };

  const changeAvatar = async (url: string) => {
    await setDoc(doc(db, "avatars", userData.uid), {
      avatar: url,
      uid: userData.uid,
    });
    setUID({ ...uid, [userData.uid]: url });
  };
  const followState =
    data.addUser?.user.following?.filter(
      (el: FollowInfo) => el.uid == userData.uid
    ).length > 0
      ? "Unfollow"
      : "Follow";

  useEffect(() => {
    if (!uid[userData.uid]) {
      getAvatar(userData.uid, setUID);
    }
  }, []);

  return (
    <View>
      <View style={styles.cont}>
        <View style={styles.subCont}>
          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                style={styles.image}
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

const styles = StyleSheet.create({
  cont: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  profileDetails: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  editProfile: {
    borderColor: "#c4c4c4",
    paddingVertical: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#c4c4c4",
  },
  loading: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    position: "absolute",
  },
  title: {
    fontWeight: "600",
  },
  txt: {
    fontWeight: "300",
  },
  subCont: {
    width: "40%",
    left: 0,
  },
  profileHeader: {
    width: "80%",
    alignItems: "center",
  },
  username: {
    marginTop: 5,
    fontWeight: "600",
  },
  followNum: {
    alignItems: "center",
  },
  followState: {
    textAlign: "center",
    fontWeight: "600",
  },
  editTXT: {
    textAlign: "center",
    fontWeight: "600",
  },
});
