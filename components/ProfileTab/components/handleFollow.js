import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { getUserData } from "../../../Redux/Actions";
export const handleFollow = async (target, currUser, dispatch) => {
  await setDoc(
    doc(db, "users", target.uid),
    {
      followers: [...target.followers, currUser.uid],
    },
    { merge: true }
  ),
    await setDoc(
      doc(db, "users", currUser.uid),
      {
        following: [...currUser.following, target.uid],
      },
      { merge: true }
    );
  dispatch(getUserData());
  dispatch(getUserData(target.uid));
};
