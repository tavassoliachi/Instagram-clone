import { db } from "../../../Firebase-config";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { DispatchType } from "../../../types/ReduxTypes";
import { postsEnum } from "../../../types/ReduxTypes";
export const getPosts = () => async (dispatch: DispatchType) => {
  const q = query(collection(db, "posts"), orderBy("createDate", "desc"));
  const { docs } = await getDocs(q);
  const data = docs.map((el: any) => {
    return {
      title: "posts",
      data: [el.data()],
    };
  });
  dispatch({ type: postsEnum.attach, payload: data });
};
