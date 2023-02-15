import { ScrollView, StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import RegularButton from "../Util/RegularButton";
import Hero from "../Util/Hero";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";

import { useDispatch, useSelector } from "react-redux";
import {
  postComplaint,
  setComplaintDescription,
  setComplaintFirstname,
  setComplaintIssue,
  setComplaintLocation,
  setComplaintPhonenumber,
  setComplaintsLastname,
} from "../Redux/Actions";

export default function HomePage() {
  const {
    first_name,
    last_name,
    phone_number,
    issue,
    picture,
    location,
    description,
  } = useSelector((state) => state.complaintFormReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(postComplaint({
      first_name,
      last_name,
      phone_number,
      issue,
      location,
      description,
    }));
  };

  return (
    <View style={GlobalStyles.background}>
      <Hero title={"New Complaint"}/>
      <Menu>
        <AppText style={GlobalStyles.headerText}>
          Please fill the following details
        </AppText>
        <RegularButton buttonName={"Submit"} onPress={onSubmit} />
        <ScrollView>
          <InputField
            name={"First Name"}
            value={first_name}
            onChangeText={(value) => dispatch(setComplaintFirstname(value))}
          />
          <InputField
            name={"Last Name"}
            value={last_name}
            onChangeText={(value) => dispatch(setComplaintsLastname(value))}
          />
          <InputField
            name={"Phone Number"}
            value={phone_number}
            onChangeText={(value) => dispatch(setComplaintPhonenumber(value))}
          />
          <InputField
            name={"Issue"}
            value={issue}
            onChangeText={(value) => dispatch(setComplaintIssue(value))}
          />
          <InputField name={"Picture of location"}>
            <RegularButton buttonName={"URL"} style={styles.urlBtn} />
          </InputField>
          <InputField
            name={"Location"}
            value={location}
            onChangeText={(value) => dispatch(setComplaintLocation(value))}
          />
          <InputField
            name={"Description (Optional)"}
            value={description}
            onChangeText={(value) => dispatch(setComplaintDescription(value))}
          />
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
