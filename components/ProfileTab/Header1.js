import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { handleFollow } from "./components/handleFollow";
import { handleUnfollow } from "./components/handleUnfollow";
import { getUserData } from "../../Redux/Actions";
import handlePost from "../handlePost";
const Header1 = ({ posts, userData, isSearch }) => {
  const [avatarLoading, setAvatarLoading] = useState(false);
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  const handleClick = async () => {
    followState == "Follow"
      ? handleFollow(userData, data.addUser.user, dispatch)
      : handleUnfollow(userData, data.addUser.user, dispatch);
  };

  const handlePress = async () => {
    setTimeout(() => {
      setAvatarLoading(true);
    }, 1000);
    !isSearch && handlePost(changeAvatar, () => setAvatarLoading(false));
  };
  const changeAvatar = async (url) => {
    await setDoc(
      doc(db, "users", userData.uid),
      {
        avatar: url,
      },
      { merge: true }
    );
    dispatch(getUserData());
  };
  const followState = data?.addUser?.user?.following?.includes(userData.uid)
    ? "Unfollow"
    : "Follow";
  return (
    <View>
      <View style={styles.cont}>
        <View
          style={{
            width: "40%",
            left: 0,
          }}
        >
          <View style={{ width: "70%", alignItems: "center" }}>
            <TouchableOpacity onLongPress={handlePress}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: "#c4c4c4",
                }}
                onLoadStart={() =>
                  avatarLoading == false && setAvatarLoading(true)
                }
                onLoadEnd={() => setAvatarLoading(false)}
                source={{
                  uri: `${
                    userData.avatar ||
                    "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png"
                  }`,
                }}
              />
            </TouchableOpacity>

            {avatarLoading && (
              <ActivityIndicator
                color="white"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: "#c4c4c4",
                  justifyContent: "center",
                  position: "absolute",
                }}
              />
            )}

            <Text style={{ marginTop: 5, fontWeight: "600" }}>
              {userData.displayName}
            </Text>
          </View>
        </View>
        <View style={styles.profileDetails}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "600" }}>{posts}</Text>
            <Text style={{ fontWeight: "300" }}>Posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "600" }}>
              {userData.followers.length}
            </Text>
            <Text style={{ fontWeight: "300" }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "600" }}>
              {userData.following.length}
            </Text>
            <Text style={{ fontWeight: "300" }}>Following</Text>
          </View>
        </View>
      </View>
      {isSearch ? (
        <TouchableOpacity
          style={{ ...styles.editProfile }}
          onPress={handleClick}
        >
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            {followState}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editProfile}>
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            Edit Profile
          </Text>
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
});
