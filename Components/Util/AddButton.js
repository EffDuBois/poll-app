import { StyleSheet } from "react-native";
import AppText from "./AppText";
import Tappable from "./Tappable";



export default function AddButton() {
    return(
        <Tappable style={styles.addButton} buttonName={"Create New"}>
        <AppText style={styles.plus}>+</AppText>
      </Tappable>
    );
}

const styles = StyleSheet.create({
  
    addButton: {
      margin: 30,
      alignSelf: "center",
      backgroundColor: "rgba(0, 0, 0, 0.28)",
      borderRadius: 100,
      paddingVertical: 15,
      paddingHorizontal: 90,
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    },
  
  
    plus: {
      fontSize: 46,
      position: "absolute",
      textAlign: 'center',
      alignSelf: "flex-start",
      backgroundColor: "rgba(0, 0, 0, 0.28)",
      borderRadius: 200,
      paddingHorizontal: 18,
      paddingVertical: 0,
    },
  
   
  });