import {  StyleSheet, View } from "react-native";
import MenuSelection from "./MenuSelection";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import HeroWithoutBack from "../Util/HeroWithoutBack";

export default function HomePage() {
  return (
    <View style={GlobalStyles.background}>
      <HeroWithoutBack title={"Welcome,"} style={[styles.heroText]} />
      <View style={[GlobalStyles.menu, styles.menu]}>
        <MenuSelection />
      </View>
    </View>
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
  }
});
