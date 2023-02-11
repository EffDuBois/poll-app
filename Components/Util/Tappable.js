import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function Tappable({onPress, buttonName, style, textStyle, children}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style,]}>
      {children}
      <AppText style={textStyle}>{buttonName}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: 'center',
  }
})