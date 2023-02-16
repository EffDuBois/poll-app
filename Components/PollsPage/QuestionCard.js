import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";



export default function QuestionCard({style, children}) {
    return(
        <View style={[styles.card, style]}>
            <AppText style={{fontWeight: '700'}}>Question:</AppText>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        height: "30%",
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        borderLeftWidth: 10,
    }
})