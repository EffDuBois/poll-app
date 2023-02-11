import { StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";


export default function Menu({children}) {
    return(
        <View style={[GlobalStyles.menu, styles.menu]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        height: '75%',
    }
})