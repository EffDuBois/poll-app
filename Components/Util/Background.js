import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";


export default function Background(props) {
    return(
        <View style={GlobalStyles.background}>
            {props.children}
        </View>
    )
}