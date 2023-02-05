import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import BackButton from "../Util/BackButton";
import RegularButton from "../Util/RegularButton";
import Hero from "../Util/Hero";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";

export default function HomePage() {


    const onSubmit = () => {
        return(
            null
        )
    }

  return (
    <View style={GlobalStyles.background}>
      <BackButton />
      <Hero>Complaints</Hero>
      <Menu>
          <AppText style={GlobalStyles.headerText}>Please fill the following details</AppText>
          <View>
            <InputField name={"First Name"} />
            <InputField name={"Last Name"} />
            <InputField name={"Phone Number"} />
            <InputField name={"Aadhar Number"} />
            <InputField name={"Location"} />
            <RegularButton buttonName={"Submit"} />
        </View>
      </Menu>
    </View>
  );
}

