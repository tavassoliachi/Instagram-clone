import { getAuth } from "firebase/auth";
import { db } from "../../../Firebase-config";
import { where, collection, query, getDocs } from "firebase/firestore";
import { IPostObject } from "../../../types/ReduxTypes";
import { searchEnum } from "../../../types/ReduxTypes";
import { authEnum } from "../../../types/ReduxTypes";
import { IPostData } from "../../../types/ReduxTypes";
import { DispatchType } from "../../../types/ReduxTypes";
async function getData(collectionName: string, uid: string) {
  const q = query(collection(db, collectionName), where("uid", "==", uid));
  const { docs } = await getDocs(q);
  if (collectionName == "posts") {
    let postsArr: Array<IPostObject> = [];
    docs.forEach((el: any) => {
      postsArr.push(el.data());
    });
    return postsArr;
  } else {
    return docs[0]?.data() || [];
  }
}
export const getUserData = (id?: string) => async (dispatch: DispatchType) => {
  const user = getAuth();

  const uid = id || user.currentUser!.uid;
  const userData = await getData("users", uid);
  const userPosts = await getData("posts", uid);

  dispatch({
    type: id ? searchEnum.attach : authEnum.login,
    payload: {
      username: userData.username,
      uid: userData.uid,
      following: userData.following,
      followers: userData.followers,
      avatar: userData.avatar,
      posts: [
        {
          title: "posts",
          data: userPosts as IPostData[],
        },
      ],
    },
  });
};
