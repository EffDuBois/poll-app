import { ScrollView, StyleSheet, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import RegularButton from "../Util/RegularButton";
import Hero from "../Util/Hero";
import InputField from "../Util/InputField";
import Menu from "../Util/Menu";

import { useDispatch, useSelector } from "react-redux";
import { postComplaint } from "../Redux/Actions/Complaint";
import { useState } from "react";

export default function HomePage() {
  const { user_logon } = useSelector((state) => state.userLoginReducer);
  const user_id = user_logon.user_id;
  
  const [ComplaintDetails, setComplaintDetails] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    issue: "",
    location: "",
    description: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(postComplaint({ ComplaintDetails, user_id }));
  };

  return (
    <View style={GlobalStyles.background}>
      <Hero title={"New Complaint"} />
      <Menu>
        <AppText style={GlobalStyles.headerText}>
          Please fill the following details
        </AppText>
        <RegularButton buttonName={"Submit"} onPress={onSubmit} />
        <ScrollView>
          <InputField
            name={"First Name"}
            value={ComplaintDetails.first_name}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, first_name: value };
              });
            }}
          />
          <InputField
            name={"Last Name"}
            value={ComplaintDetails.last_name}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, last_name: value };
              });
            }}
          />
          <InputField
            name={"Phone Number"}
            value={ComplaintDetails.phone_number}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, phone_number: value };
              });
            }}
          />
          <InputField
            name={"Issue"}
            value={ComplaintDetails.issue}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, issue: value };
              });
            }}
          />
          <InputField name={"Picture of location"}>
            <RegularButton buttonName={"URL"} style={styles.urlBtn} />
          </InputField>
          <InputField
            name={"Location"}
            value={ComplaintDetails.location}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, location: value };
              });
            }}
          />
          <InputField
            name={"Description (Optional)"}
            value={ComplaintDetails.description}
            onChangeText={(value) => {
              setComplaintDetails((prevState) => {
                return { ...prevState, description: value };
              });
            }}
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
