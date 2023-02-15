import { StyleSheet } from "react-native";
import AppText from "../Util/AppText";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

export default function EventDetailPage() {

    

  return (
    <Background>
      <Hero title={"/Event Name"}>
        <AppText style={styles.heroText}>Date: 00/00/00</AppText>
        <AppText style={styles.heroText}>Time: 00:00:00</AppText>
        <AppText style={styles.heroText}>Venue: xyz road</AppText>
      </Hero>
      <Menu style={{ height: "60%" }}>
        <AppText style={{ margin: 20 }}>Event Details</AppText>
      </Menu>
    </Background>
  );
}

const styles = StyleSheet.create({
    heroText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "700",
    }
})
