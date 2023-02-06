import { StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import Background from "../Util/Background";
import ComplaintsMenu from "./ComplaintsMenu";
import ComplaintsPageHero from "./ComplaintsPageHero";

export default function HomePage() {
  return (
    <Background>
      <ComplaintsPageHero />
      <View style={styles.background}>
        <ComplaintsMenu />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "60%",
    backgroundColor: "#rgba(229, 234, 245, 1)",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
});
