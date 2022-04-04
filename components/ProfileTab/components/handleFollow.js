import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { getUserData } from "../../../Redux/Actions/user/getUserData";
export const handleFollow = async (target, currUser, dispatch) => {
  await setDoc(
    doc(db, "users", target.uid),
    {
      followers: [
        ...target.followers,
        { uid: currUser.uid, username: currUser.username },
      ],
    },
    { merge: true }
  ),
    await setDoc(
      doc(db, "users", currUser.uid),
      {
        following: [
          ...currUser.following,
          { uid: target.uid, username: target.username },
        ],
      },
      { merge: true }
    );
  dispatch(getUserData());
  dispatch(getUserData(target.uid));
};
