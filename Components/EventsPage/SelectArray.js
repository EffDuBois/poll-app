import { View } from "react-native";
import SelectButton from "../Util/SelectButton";

export default function SelectArray() {
    return(
        <View>
            <SelectButton buttonName={"Past"} />
            <SelectButton buttonName={"Present"} />
            <SelectButton buttonName={"Future"} />
        </View>
    )
}
