import { db } from "../Firebase-config";
import { getDocs, collection, query, where } from "firebase/firestore";
async function getAvatar(userID: string, setContextUID: (value: any) => void) {
  const q = query(collection(db, "avatars"), where("uid", "==", userID));

  const { docs } = await getDocs(q);
  let url = docs[0]?.data().avatar || "";
  setContextUID((prev: Array<string>) => ({ ...prev, [userID]: url }));
  return { url: url };
}
export default getAvatar;
