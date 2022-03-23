import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { getUserData } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
export const handleUnfollow = async (target, currUser, dispatch) => {
  await setDoc(
    doc(db, "users", target.uid),
    {
      followers: [...target.followers.filter((id) => id !== currUser.uid)],
    },
    { merge: true }
  ),
    await setDoc(
      doc(db, "users", currUser.uid),
      {
        following: [...currUser.following.filter((id) => id !== target.uid)],
      },
      { merge: true }
    );
  dispatch(getUserData());
  dispatch(getUserData(target.uid));
};
