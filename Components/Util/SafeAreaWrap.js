import SafeViewAndroid from "../StyleComponents/SafeViewAndroid.js";

import { SafeAreaView, StatusBar } from "react-native";

export default function SafeAreaWrap({children}) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar backgroundColor="#494d5f" />
      {children}
    </SafeAreaView>
  );
}
