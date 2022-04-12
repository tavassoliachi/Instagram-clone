import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../Firebase-config";
import { getUserData } from "../../../Redux/Actions/user/getUserData";
import { IProfile } from "../../../types/ReduxTypes";
export const handleUnfollow = async (
  target: IProfile,
  currUser: IProfile,
  dispatch: (dispatch: any) => Promise<void>
) => {
  await setDoc(
    doc(db, "users", target.uid),
    {
      followers: [...target.followers.filter((el) => el.uid !== currUser.uid)],
    },
    { merge: true }
  ),
    await setDoc(
      doc(db, "users", currUser.uid),
      {
        following: [
          ...currUser.following.filter((el) => el.uid !== target.uid),
        ],
      },
      { merge: true }
    );
  dispatch(getUserData());
  dispatch(getUserData(target.uid));
};
