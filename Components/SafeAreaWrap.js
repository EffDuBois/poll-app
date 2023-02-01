import SafeViewAndroid from "./StyleComponents/SafeViewAndroid.js";

import { SafeAreaView, StatusBar } from "react-native";
import MainPage from "./MainPage.js";

export default function SafeAreaWrap() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar backgroundColor="#494d5f" />
        <MainPage/>
    </SafeAreaView>
  );
}
