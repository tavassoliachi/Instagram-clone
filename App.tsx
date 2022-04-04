import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, SafeAreaView, AppRegistry } from "react-native";
import MainNavigations from "./Navigations/MainNavigations";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { LogBox } from "react-native";
import { AppStateProvider } from "./Context";

export const App: FC = () => {
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
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
