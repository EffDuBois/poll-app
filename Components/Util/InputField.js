import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

export default function InputField({name, secureTextEntry}) {
  return (
    <View style={{marginVertical: 15, marginHorizontal: 30}}>
      <AppText style={{fontSize: 15}}>{name}:</AppText>
      <TextInput secureTextEntry={secureTextEntry} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
  },
});
