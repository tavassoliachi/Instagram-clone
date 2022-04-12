import { View, Text, Image, Dimensions } from "react-native";
import { Dispatch } from "react";

const ImageHeight = async (
  img: string,
  setHeight: Dispatch<React.SetStateAction<number>>
) => {
  return Image.getSize(img, (width, height) => {
    let screenWidth = Dimensions.get("window").width;
    let scaleFactor = width / screenWidth;
    let imgSize = height / scaleFactor;
    setHeight(imgSize);
  });
};

export default ImageHeight;
