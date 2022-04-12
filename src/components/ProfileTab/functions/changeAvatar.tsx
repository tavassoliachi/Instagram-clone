import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import handlePost from "../../handlePost";
import { Dispatch } from "react";
export const changeAvatar = async (
  isSearch: boolean,
  setAvatarLoading: Dispatch<React.SetStateAction<boolean>>,
  userUID: string,
  setUID: Dispatch<React.SetStateAction<boolean>>,
  prevUID: any
) => {
  if (isSearch) {
    return;
  }
  setTimeout(() => {
    setAvatarLoading(true);
  }, 1000);
  handlePost(
    (url) => changeAvatar(url),
    () => setAvatarLoading(false)
  );
  async function changeAvatar(url: string) {
    await setDoc(doc(db, "avatars", userUID), {
      avatar: url,
      uid: userUID,
    });
    setUID({ ...prevUID, [userUID]: url });
  }
};
