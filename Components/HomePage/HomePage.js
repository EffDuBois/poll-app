import { StyleSheet, View } from "react-native";
import MenuSelection from "./MenuSelection";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import Background from "../Util/Background";
import HeroWithoutBack from "../Util/HeroWithoutBack";

export default function HomePage() {
  return (
    <Background>
      <HeroWithoutBack >Welcome,</HeroWithoutBack>
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
});
