import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import Tappable from "./Tappable";

export default function BackButton() {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <Tappable
      buttonName={
        <Image
          source={require("../../assets/back_arrow.png")}
          style={styles.Icon}
          resizeMode="stretch"
        />
      }
      onPress={onPressHandler}
      style={styles.backButton}
      textStyle={styles.backButtonText}
    />
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginHorizontal: "5%",
    marginTop: "2%",
    alignSelf: "flex-start",
  },

  backButtonText: {
    color: "#ffffff",
    fontSize: 50,
  },

  Icon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    margin: 30,
  },
});
