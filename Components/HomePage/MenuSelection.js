import { Image, StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import MenuButton from "../Util/MenuButton";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import { useNavigation } from "@react-navigation/native";

export default function MenuSelection() {

  const navigation = useNavigation();

  const onPressHandler = (screen) => {
    navigation.navigate(screen)
  };

  return (
    <View>
      <AppText style={GlobalStyles.headerText}>Choose Option</AppText>
      <View style={[styles.subMenu]}>
        <MenuButton
          buttonName={"Events"}
          color={"#rgba(255, 209, 1, 0.3)"}
          onPress={()=>{onPressHandler("EventsPage")}}
        >
          <Image
            source={require("../../assets/Choice-option/events.png")}
            style={styles.Icon}
            resizeMode="cover"
          />
        </MenuButton>
      </View>
      <View style={[styles.subMenu]}>
        <MenuButton
          buttonName={"Polls"}
          color={"#rgba(237, 69, 69, 0.3)"}
          onPress={()=>{onPressHandler("PollsPage")}}
        >
          <Image
            source={require("../../assets/Choice-option/poll.png")}
            style={styles.Icon}
            resizeMode="stretch"
          />
          
        </MenuButton>
        <MenuButton
          buttonName={"Complaints"}
          color={"#rgba(3, 173, 173, 0.3)"}
          onPress={()=>{onPressHandler("ComplaintsPage")}}
        >
          <Image
            source={require("../../assets/Choice-option/complaints.png")}
            style={styles.Icon}
            resizeMode="cover"
          />
        </MenuButton>
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

  Icon: {
    width: 80,
    height: 80,
    alignSelf: "center",
    margin: 15,
  },
});
