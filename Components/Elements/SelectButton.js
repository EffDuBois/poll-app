import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";

export default function SelectButton(props) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: props.color }, styles.SelectButton]}
    >
      {props.children}
      <AppText style={styles.ButtonText}>{props.buttonName}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  SelectButton: {
    width: "35%",
    height: "83%",
    padding: "5%",
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  ButtonText: {
    fontSize: 14,
  },

});
