import { StyleSheet } from "react-native";
import Hero from "./Hero";

export default function HeroWithoutBack({children}) {
    return(
        <Hero style={[styles.heroText]}>{children}</Hero>
    )
}

const styles = StyleSheet.create({
    heroText: {
        marginTop: 22,
      },
})