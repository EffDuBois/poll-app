import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";

export default function HeroWithoutBack({ style, title }) {
  return (
    <View style={[styles.hero, style]}>
      <AppText style={[GlobalStyles.heroText, styles.heroText]}>
        {title}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
  },

  heroText: {
    marginTop: 22,
  },
});
