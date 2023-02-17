import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import RegularButton from "../Util/RegularButton";

export default function QuestionCard({ question, style, children, onSubmit }) {
  return (
    <View style={[styles.card, style]}>
        <AppText style={{margin: 10,}}><AppText style={{ fontWeight: "700" , Display: "inline", }}>Question:</AppText><AppText>{question}</AppText></AppText>
      {children}
      <RegularButton buttonName={"Submit"} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    borderLeftWidth: 10,
  },
});
