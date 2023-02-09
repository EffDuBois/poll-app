import { StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";

export default function InputField({name, onChangeText}) {
  return (
    <View style={{marginVertical: 15, marginHorizontal: 30}}>
      <AppText style={{fontSize: 15}}>{name}:</AppText>
      <TextInput style={styles.input} onChangeText={onChangeText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
  },
});
