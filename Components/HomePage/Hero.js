import { StyleSheet, View } from "react-native";
import AppText from "../Elements/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";

export default function Hero() {
  return (
    <View style={[GlobalStyles.hero]}>
      <AppText style={styles.text}>Welcome</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        margin: 30,
        fontSize: 32,
    }
})