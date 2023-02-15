import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";


export default function EventCard({name, onPress}) {
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <AppText>{name}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        borderLeftWidth: 10,
        padding: 7,
    }
})