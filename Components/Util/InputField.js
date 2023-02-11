import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

export default function InputField({ name, secureTextEntry, children }) {
  return (
    <View style={{ marginVertical: 15, marginHorizontal: 30 }}>
      <AppText style={styles.text}>{name}:</AppText>
      {children ? (
        children
      ) : (
        <TextInput secureTextEntry={secureTextEntry} style={styles.input} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  input: {
    borderBottomWidth: 1,
  },
});
