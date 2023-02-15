import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function ComplaintCard({title, status}) {

  return (
    <View style={[styles.card, { backgroundColor: (status == 'Solved')? 'rgba(59, 255, 114, 1)': (status == 'Processing')? 'rgba(149, 151, 152, 1)': "rgba(255, 59, 59, 1)"}]}>
      <AppText style={styles.nameText}>{title}</AppText>
      <AppText style={styles.statusText}>Status: {status}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: '5%',
    marginVertical: '3%',
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
