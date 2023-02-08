import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

export default function InputField(props) {
  return (
    <View style={{ marginVertical: 15, marginHorizontal: 30 }}>
      <AppText style={{ fontSize: 15 }}>{props.name}:</AppText>
      <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} style={styles.input} secureTextEntry={props.secureTextEntry}  />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 1,
  },
});
