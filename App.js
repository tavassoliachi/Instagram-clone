import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import MainNavigations from "./Navigations/MainNavigations";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { LogBox } from "react-native";
import { AppStateContext } from "./Context";
import { AppStateProvider } from "./Context";
export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppStateProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainNavigations />
          <StatusBar style="auto" />
        </SafeAreaView>
      </AppStateProvider>
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
