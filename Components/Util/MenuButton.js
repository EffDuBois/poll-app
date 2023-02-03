import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function MenuButton(props) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(props.screen);
  };

  return (
    <Tappable
      buttonName={props.buttonName}
      onPress={onPressHandler}
      style={[{ backgroundColor: props.color }, styles.SelectButton]}
      textStyle={styles.ButtonText}
    >
      {props.children}
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
    alignItems: "center",
    fontSize: 14,
  },

  ButtonText: {
    fontSize: 14,
  },
});
