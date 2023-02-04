import { View } from "react-native";
import ComplaintsMenu from "../ComplaintsPage/ComplaintsMenu";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

export default function HomePage() {
    return (
      <View style={GlobalStyles.background}>
        <BackButton/>
        <Hero>Complaints</Hero>
        <Menu>
            
        </Menu>
      </View>
    );
  }