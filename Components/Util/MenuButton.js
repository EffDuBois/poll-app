import { StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function MenuButton({buttonName, color, onPress, children}) {
  
  return (
    <Tappable
      buttonName={buttonName}
      onPress={onPress}
      style={[{ backgroundColor: color }, styles.SelectButton]}
      textStyle={styles.ButtonText}
    >
      {children}
    </Tappable>
  );
}

const styles = StyleSheet.create({
  SelectButton: {
    flex: 1,
    height: '90%',
    margin: '5%',
    padding: "5%",
    borderRadius: 20,
    justifyContent: "flex-end",
    fontSize: 14,
  },

  ButtonText: {
    fontSize: 14,
  },
});
