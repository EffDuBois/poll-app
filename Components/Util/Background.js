import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";


export default function Background({children}) {
    return(
        <View style={GlobalStyles.background}>
            {children}
        </View>
    )
}