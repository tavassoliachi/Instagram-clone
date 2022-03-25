import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import MainNavigations from "./Navigations/MainNavigations";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { LogBox } from "react-native";
export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigations />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
