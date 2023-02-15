import { ScrollView, StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import RegularButton from "../Util/RegularButton";
import Hero from "../Util/Hero";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";

import { useDispatch, useSelector } from "react-redux";
import { setComplaintDescription, setComplaintFirstname, setComplaintIssue, setComplaintLocation, setComplaintPhonenumber, setComplaintsLastname } from "../Redux/Actions";

export default function HomePage() {
  const {firstName, lastName, phoneNumber, issue, picture, location, description} = useSelector(state => state.complaintReducer)

  const dispatch = useDispatch();

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
          <InputField name={"First Name"} value={firstName} onChangeText={(value) => dispatch(setComplaintFirstname(value))}/>
          <InputField name={"Last Name"} value={lastName} onChangeText={(value) => dispatch(setComplaintsLastname(value))}/>
          <InputField name={"Phone Number"} value={phoneNumber} onChangeText={(value) => dispatch(setComplaintPhonenumber(value))}/>
          <InputField name={"Issue"} value={issue} onChangeText={(value) => dispatch(setComplaintIssue(value))}/>
          <InputField name={"Picture of location"}>
            <RegularButton buttonName={"URL"} style={styles.urlBtn} />
          </InputField>
          <InputField name={"Location"} value={location} onChangeText={(value) => dispatch(setComplaintLocation(value))}/>
          <InputField name={"Description (Optional)"} value={description} onChangeText={(value) => dispatch(setComplaintDescription(value))}/>
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
