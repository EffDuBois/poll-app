import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import SelectButton from "../Util/SelectButton";
import SelectArray from "./SelectArray";

export default function EventsPage() {
  return (
    <View style={GlobalStyles.background}>
      <BackButton />
      <Hero>Events</Hero>
      <Menu>
        <SelectArray/>
      </Menu>
    </View>
  );
}
