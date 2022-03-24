import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ height: "85%", justifyContent: "center" }}>
        <Image
          source={require("../assets/Instagram-logo.png")}
          style={{ width: 80, height: 80, marginTop: 70 }}
        />
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#c4c4c4",
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          from
        </Text>
        <Image
          source={require("../assets/meta-logo.png")}
          style={{ height: 40, resizeMode: "contain", bottom: 0, right: 0 }}
        />
      </View>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
