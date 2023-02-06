import { StyleSheet, View } from "react-native";
import SelectButton from "../Util/SelectButton";

export default function SelectArray() {
    return(
        <View style={styles.array} >
            <SelectButton buttonName={"Past"} />
            <SelectButton buttonName={"Present"} />
            <SelectButton buttonName={"Future"} />
        </View>
    )
}

const styles = StyleSheet.create({
    array: {
        flexDirection: "row",
    }
})
