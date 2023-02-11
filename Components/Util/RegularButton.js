import { StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function RegularButton({buttonName, onPress, style}) {
  return (
    <Tappable
      buttonName={buttonName}
      onPress={onPress}
      style={[styles.button, style]}
      textStyle={styles.buttonFont}
    />
  );
}

const styles = StyleSheet.create({
    button:{
        width: 124,
        height: 34,
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(255, 137, 59, 1)',
        marginVertical: 15,
        marginHorizontal: 30,
    },

    buttonFont: {
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#ffffff',
    }
})