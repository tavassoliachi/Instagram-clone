import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase-config";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { handleFollow } from "./components/handleFollow";
import { handleUnfollow } from "./components/handleUnfollow";
import { getPosts } from "../../Redux/Actions";
const Header1 = ({ posts, userData, isSearch }) => {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  const handleClick = async () => {
    followState == "Follow"
      ? handleFollow(userData, data.addUser.user, dispatch)
      : handleUnfollow(userData, data.addUser.user, dispatch);
  };

  const handlePress = async () => {
    if (isSearch) {
      return;
    }
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Denied");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          handleImageUpload(result.uri);
        }
      }
    }
  };
  const handleImageUpload = async (img) => {
    const storage = getStorage();
    const name = "image-" + (Math.random() + Math.random()).toString();
    const storageRef = ref(storage, name);

    const image = await fetch(img);
    const bytes = await image.blob();

    uploadBytes(storageRef, bytes).then(() => {
      getDownloadURL(storageRef).then((url) => handleChange(url));
    });
  };
  const handleChange = async (url) => {
    await setDoc(
      doc(db, "users", userData.uid),
      {
        avatar: url,
      },
      { merge: true }
    );
    dispatch(getPosts());
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
                source={{
                  uri: `${
                    userData.avatar ||
                    "https://bombyxplm.com/wp-content/uploads/2021/01/421-4213053_default-avatar-icon-hd-png-download.png"
                  }`,
                }}
                style={styles.image}
              />
            </TouchableOpacity>

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
  image: { width: 90, height: 90, borderRadius: 45 },
  editProfile: {
    borderColor: "#c4c4c4",
    paddingVertical: 8,
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
