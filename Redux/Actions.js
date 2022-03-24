import { getAuth } from "firebase/auth";
import { userAdd } from "./Consts";
import { db } from "../Firebase-config";
import { where, collection, query, getDocs } from "firebase/firestore";

async function getData(collectionName, uid) {
  const q = query(collection(db, collectionName), where("uid", "==", uid));
  const { docs } = await getDocs(q);
  if (collectionName == "posts") {
    let postsArr = [];
    docs.forEach((el) => {
      postsArr.push(el.data());
    });
    return postsArr;
  } else {
    return docs[0].data();
  }
}
export const getUserData = (id) => async (dispatch) => {
  const user = getAuth();
  const uid = id || user.currentUser.uid;
  const userData = await getData("users", uid);
  const userPosts = await getData("posts", uid);
  dispatch({
    type: `${id ? "attachSearchRes" : "login"}`,
    payload: {
      displayName: userData.username,
      uid: userData.uid,
      following: userData.following,
      followers: userData.followers,
      avatar: userData.avatar,
      posts: [
        {
          title: "posts",
          data: userPosts,
        },
      ],
    },
  });
};
export const getPosts = () => async (dispatch) => {
  const q = query(collection(db, "posts"));
  const { docs } = await getDocs(q);
  const data = docs.map((el) => {
    return {
      title: "post",
      data: [el.data()],
    };
  });
  dispatch({ type: "attachPosts", payload: data });
};
