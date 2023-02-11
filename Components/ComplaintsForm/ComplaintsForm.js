import { ScrollView, StyleSheet, View } from "react-native";
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
    return console.log(Details);
  };

  return (
    <View style={GlobalStyles.background}>
      <Hero>Complaints</Hero>
      <Menu>
        <AppText style={GlobalStyles.headerText}>
          Please fill the following details
        </AppText>
        <ScrollView >
          <InputField name={"First Name"} />
          <InputField name={"Last Name"} />
          <InputField name={"Phone Number"} />
          <InputField name={"Issue"} />
          <InputField name={"Picture of location"}>
            <RegularButton buttonName={"URL"} style={styles.urlBtn} />
          </InputField>
          <InputField name={"Location"} />
          <InputField name={"Description (Optional)"} />
          <RegularButton buttonName={"Submit"} onPress={onSubmit} />
        </ScrollView>
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  urlBtn: {
    alignSelf: "flex-start",
    margin: 0,
  },
});
