import { auth } from "../../../../Firebase-config";
import { useDispatch } from "react-redux";
import { db } from "../../../../Firebase-config";
import { getPosts } from "../../../../Redux/Actions/user/getPosts";
import { Dispatch } from "react";
import { IPostData } from "../../../../types/ReduxTypes";
import { setDoc, doc } from "firebase/firestore";
export const PostLike = async (
  like: boolean,
  setLike: Dispatch<React.SetStateAction<boolean>>,
  setLikeN: Dispatch<React.SetStateAction<number>>,
  postData: IPostData
) => {
  const dispatch = useDispatch();
  const status = like;

  setLikeN((prev: any) => (like ? prev - 1 : prev + 1));
  setLike(!like);

  const currUID: string = auth.currentUser?.uid || "";
  const newData = status
    ? [...postData.likes.filter((el: string) => el !== currUID)]
    : [...postData?.likes, currUID];
  await setDoc(
    doc(db, "posts", postData.name),
    {
      likes: newData,
    },
    { merge: true }
  );
  dispatch(getPosts());
};
