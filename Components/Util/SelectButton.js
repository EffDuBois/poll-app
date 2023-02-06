import { StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function SelectButton(props) {
  return (
    <Tappable
      buttonName={props.buttonName}
      onPress={props.onPress}
      style={styles.button}
      textStyle={styles.buttonFont}
    />
  );
}

const styles = StyleSheet.create({
    button:{
      flex: 1,
      margin: '2%',
      height: '30%',
      alignSelf: "center",
      backgroundColor: "rgba(255, 137, 59, 0.3)",
      borderRadius: 100,
    },

    buttonFont: {
        fontSize: 16,
    }
})