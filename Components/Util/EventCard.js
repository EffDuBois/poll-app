import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";


export default function EventCard({name}) {
    return(
        <TouchableOpacity style={styles.card}>
            <AppText>{name}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "stretch",
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        margin: '5%',
        borderLeftWidth: 10,
        padding: 7,
    }
})