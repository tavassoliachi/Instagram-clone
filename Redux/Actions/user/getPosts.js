import { db } from "../../../Firebase-config";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { post } from "../../Consts";
export const getPosts = () => async (dispatch) => {
  const q = query(collection(db, "posts"), orderBy("createDate", "desc"));
  const { docs } = await getDocs(q);
  const data = docs.map((el) => {
    return {
      title: "post",
      data: [el.data()],
    };
  });
  dispatch({ type: post.attach, payload: data });
};
