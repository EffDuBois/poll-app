import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import BackButton from "../Util/BackButton";
import RegularButton from "../Util/RegularButton";
import Hero from "../Util/Hero";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";
import { useState } from "react";

export default function HomePage() {

  const [Details, setDetails] = useState("");

    const onSubmit = () => {
        return(
            console.log(Details)
        )
    }

  return (
    <View style={GlobalStyles.background}>
      <BackButton />
      <Hero>Complaints</Hero>
      <Menu>
          <AppText style={GlobalStyles.headerText}>Please fill the following details</AppText>
          <View>
            <InputField name={"First Name"} onChangeText={(value)=>{setDetails({...Details, firstName: value})}} />
            <InputField name={"Last Name"} onChangeText={(value)=>{setDetails({...Details, lastName: value})}} />
            <InputField name={"Phone Number"} onChangeText={(value)=>{setDetails({...Details, phoneNumber: value})}} />
            <InputField name={"Aadhar Number"} onChangeText={(value)=>{setDetails({...Details, aadharNumber: value})}} />
            <InputField name={"Location"} onChangeText={(value)=>{setDetails([...Details, {...Details, location: value}])}} />
            <RegularButton buttonName={"Submit"} onPress={onSubmit} />
        </View>
      </Menu>
    </View>
  );
}

