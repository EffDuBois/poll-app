import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import AddComplaintButton from "../Util/AddComplaintButton";

export default function ComplaintsPageHero() {
  return (
    <View style={[styles.hero]}>
      <BackButton/>
      <AppText style={GlobalStyles.heroText}>Complaints</AppText>
      <AddComplaintButton/>
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
