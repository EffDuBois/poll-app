import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import BackButton from "../Util/BackButton";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import SelectButton from "../Util/SelectButton";

export default function EventsPage() {
  return (
    <Background>
      <BackButton />
      <Hero>Events</Hero>
      <Menu>
        <View>
          <SelectButton />
        </View>
      </Menu>
    </Background>
  );
}
