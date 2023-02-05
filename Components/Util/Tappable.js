import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function Tappable(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.button, props.style,]}>
      {props.children}
      <AppText style={props.textStyle}>{props.buttonName}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: 'center',
  }
})