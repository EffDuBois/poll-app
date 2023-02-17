import { StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AddComplaintButton from "../Util/AddComplaintButton";
import Hero from "../Util/Hero";
import ComplaintsMenu from "./ComplaintsMenu";

export default function HomePage() {
  return (
    <View style={GlobalStyles.background}>
      <Hero title={"Complaints"}><AddComplaintButton/></Hero>
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

});
