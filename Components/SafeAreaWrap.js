import SafeViewAndroid from "./StyleComponents/SafeViewAndroid.js";

import { SafeAreaView, StatusBar } from "react-native";
import MainPage from "./MainPage.js";

export default function SafeAreaWrap(props) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar backgroundColor="#494d5f" />
        {props.children}
    </SafeAreaView>
  );
}
