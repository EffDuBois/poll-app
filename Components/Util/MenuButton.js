import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function MenuButton({screen, buttonName, color, children}) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(screen);
  };

  return (
    <Tappable
      buttonName={buttonName}
      onPress={onPressHandler}
      style={[{ backgroundColor: color }, styles.SelectButton]}
      textStyle={styles.ButtonText}
    >
      {children}
    </Tappable>
  );
}

const styles = StyleSheet.create({
  SelectButton: {
    width: "35%",
    height: "83%",
    padding: "5%",
    borderRadius: 20,
    justifyContent: "flex-end",
    fontSize: 14,
  },

  ButtonText: {
    fontSize: 14,
  },
});
