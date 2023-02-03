import { StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintsMenu from "./ComplaintsMenu";
import HeroWithForm from "./HeroComplaintsMenu";

export default function HomePage() {
  return (
    <View style={GlobalStyles.background}>
      <HeroWithForm/>
      <View style={styles.background}>
        <ComplaintsMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "60%",
    backgroundColor: "#rgba(229, 234, 245, 1)",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },

  main: {
    width: "82%",
    height: "117%",
    alignSelf: "center",
  },
});
