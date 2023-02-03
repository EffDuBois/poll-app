import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintCard from "../Util/ComplaintCard";

export default function ComplaintsMenu() {
  return (
    <View style={[GlobalStyles.main, styles.main]}>
      <AppText style={GlobalStyles.headerText}>History</AppText>
      <ComplaintCard name={"Broken Road"} status={"Solved"} />
      <ComplaintCard name={"Dirty Road"} status={"Processing"} />
      <ComplaintCard name={"Broken Road"} status={"Declined"} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "82%",
    height: "117%",
    alignSelf: "center",
  },
});
