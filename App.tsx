import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, AppRegistry } from "react-native";
import MainNavigations from "./src/Navigations/MainNavigations";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./src/Redux/Store";
import { AppStateProvider } from "./src/Context";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppStateProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <MainNavigations />
            <StatusBar style="auto" />
          </SafeAreaView>
        </AppStateProvider>
      </PersistGate>
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
