import { StyleSheet, View } from "react-native";
import MenuSelection from "./MenuSelection";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import Hero from "../Util/Hero";
import Background from "../Util/Background";

export default function HomePage() {
  return (
    <Background>
      <Hero style={[styles.heroText]}>Welcome,</Hero>
      <View style={[GlobalStyles.menu, styles.menu]}>
        <MenuSelection />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: "60%",
    borderColor: "#ffffff",
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },

  heroText: {
    marginTop: 22,
  },
});
