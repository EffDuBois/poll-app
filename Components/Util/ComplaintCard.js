import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function ComplaintCard({name, status}) {

  return (
    <View style={[styles.card, { backgroundColor: (status == 'Solved')? 'rgba(59, 255, 114, 1)': (status == 'Processing')? 'rgba(149, 151, 152, 1)': "rgba(255, 59, 59, 1)"}]}>
      <AppText style={styles.nameText}>{name}</AppText>
      <AppText style={styles.statusText}>Status: {status}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "85%",
    margin: 9,
    alignSelf: "center",
    paddingVertical: 9,
    paddingHorizontal: 12,
  },

  nameText: {
    fontSize: 16,
  },

  statusText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 1)",
  },
});
