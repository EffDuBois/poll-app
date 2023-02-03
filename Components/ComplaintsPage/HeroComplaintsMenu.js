import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import AddButton from "../Util/AddButton";

export default function HeroWithForm(props) {
  return (
    <View style={[styles.hero]}>
      <BackButton/>
      <AppText style={GlobalStyles.heroText}>Complaints</AppText>
      <AddButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
  },



  heroText: {
    marginTop: 0,
  },

});
