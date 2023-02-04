import { StyleSheet, View } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintCard from "../Util/ComplaintCard";
import { useState } from "react";

export default function ComplaintsMenu() {

  const [ComplaintList, setComplaintList] = useState([
    {name: "Broken road", status: "Solved"},
    {name: "Dirty Road", status: "Processing"},
    {name: "Build Highway", status: "Declined"},
  ])

  return (
    <View style={[GlobalStyles.menu, styles.menu]}>
      <AppText style={GlobalStyles.headerText}>History</AppText>
      {
        ComplaintList.map((list) =>{
          return(
            <ComplaintCard key={list.name} name={list.name} status={list.status} />
          )
        }) 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "82%",
    height: "117%",
    alignSelf: "center",
  },
});
