import { Image, StyleSheet, View } from "react-native";
import AppText from "../Elements/AppText";
import SelectButton from "../Elements/SelectButton";

export default function MenuSelection() {
  return (
    <View>
      <AppText style={styles.text}>Choose Option</AppText>
      <View style={[styles.subMenu]}>
        <SelectButton
          buttonName={"Complaints"}
          color={"#rgba(3, 173, 173, 0.3)"}
        >
          <Image
            source={require("../../assets/Choice-option/complaints.png")}
            style={styles.Icon}
            resizeMode="cover"
          />
        </SelectButton>
        <SelectButton buttonName={"Events"} color={"#rgba(255, 209, 1, 0.3)"}>
          <Image
            source={require("../../assets/Choice-option/events.png")}
            style={styles.Icon}
            resizeMode="cover"
          />
        </SelectButton>
      </View>
      <View style={[styles.subMenu]}>
        <SelectButton buttonName={"Polls"} color={"#rgba(237, 69, 69, 0.3)"}>
          <Image
            source={require("../../assets/Choice-option/poll.png")}
            style={styles.Icon}
            resizeMode="stretch"
          />
        </SelectButton>
        <SelectButton buttonName={"Exit"} color={"#rgba(37, 211, 102, 0.51)"}>
          <Image
            source={require("../../assets/Choice-option/exit.png")}
            style={styles.Icon}
            resizeMode="stretch"
          />
        </SelectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subMenu: {
    height: "40%",
    margin: "1%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  text: {
    margin: "5%",
  },

  Icon: {
    width: 80,
    height: 80,
    alignSelf: "center",
    margin: 15,
  },
});
