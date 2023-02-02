import { Pressable, StyleSheet, Text, View } from "react-native";
import MenuSelection from "./MenuSelection";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <View style={GlobalStyles.background}>
      <Hero/>
      <View style={[GlobalStyles.main, styles.main]}>
        <MenuSelection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "60%",
    borderColor: "#ffffff",
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },
});
