import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "./BackButton";

export default function Hero({style,children}) {
  return (
    <View style={[styles.hero, style]}>
      <BackButton/>
      <AppText style={GlobalStyles.heroText}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
  },
});
