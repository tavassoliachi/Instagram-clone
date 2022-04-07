import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, AppRegistry } from "react-native";
import MainNavigations from "./src/Navigations/MainNavigations";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import { LogBox } from "react-native";
import { AppStateProvider } from "./src/Context";

export default function App() {
  // LogBox.ignoreLogs();
  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
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
