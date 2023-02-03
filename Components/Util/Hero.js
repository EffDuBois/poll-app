import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";

export default function Hero(props) {
  return (
    <View style={[styles.hero, props.style]}>
      <AppText style={GlobalStyles.heroText}>{props.children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
  },
});
