import { StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";


export default function Menu(props) {
    return(
        <View style={[GlobalStyles.menu, styles.menu]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        height: '75%',
    }
})