import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";

export default function Hero(props) {
  return (
    <View style={[GlobalStyles.hero, props.style]}>
      <AppText style={GlobalStyles.heroText}>{props.children}</AppText>
    </View>
  );
}
