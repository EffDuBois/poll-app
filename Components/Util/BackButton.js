import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Tappable from "./Tappable"


export default function BackButton() {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.goBack();
    }

    return(
        <Tappable buttonName={"<"} onPress={onPressHandler} style={styles.backButton} textStyle={styles.backButtonText} />
    );
}

const styles = StyleSheet.create({

    backButton: {
      marginLeft: 10,
    },
  
    backButtonText: {
      color: '#ffffff',
      fontSize: 50
    }
  });