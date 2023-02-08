import { StyleSheet } from "react-native";
import Hero from "./Hero";

export default function HeroWithoutBack(props) {
    return(
        <Hero style={[styles.heroText]}>{props.children}</Hero>
    )
}

const styles = StyleSheet.create({
    heroText: {
        marginTop: 22,
      },
})