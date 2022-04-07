import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import RandomID from "./Random";
import { Platform } from "react-native";
const handlePost = async (
  Upload: (url: string) => void,
  stopLoading?: () => void
) => {
  if (Platform.OS !== "web") {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Denied");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        handleImageUpload(result.uri);
      } else {
        stopLoading && stopLoading();
      }
    }
  }

  async function handleImageUpload(img: string) {
    const storage = getStorage();
    const name = `${RandomID()}`;
    const storageRef = ref(storage, name);

    const image = await fetch(img);
    const bytes = await image.blob();

    uploadBytes(storageRef, bytes).then(() => {
      getDownloadURL(storageRef).then((url) => Upload(url));
    });
  }
};

export default handlePost;
