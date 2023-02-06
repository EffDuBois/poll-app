import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintCard from "../Util/ComplaintCard";
import { useState } from "react";

export default function ComplaintsMenu() {

    //refreshing state and funciton
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
      setRefreshing(true);
      setComplaintList([...ComplaintList, { name: "added element", status: "Solved" }]); //add getter function instead of added element
      setRefreshing(false);
    }  

  //complaint list state
  const [ComplaintList, setComplaintList] = useState([
    { name: "Broken road", status: "Solved" },
    { name: "Dirty Road", status: "Processing" },
    { name: "Build Highway", status: "Declined" },
    { name: "Broken roa", status: "Solved" },
    { name: "Dirty Roa", status: "Processing" },
    { name: "Build Higway", status: "Declined" },
    { name: "Broken ad", status: "Solved" },
    { name: "Dirtyoad", status: "Processing" },
    { name: "Bui Highway", status: "Declined" },
  ]);

  return (
    <View style={[GlobalStyles.menu, styles.menu]}>
      <AppText style={GlobalStyles.headerText}>History</AppText>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }
      >
        {ComplaintList.map((item) => {
          return (
            <ComplaintCard
              key={item.name}
              name={item.name}
              status={item.status}
            />
          );
        })}
      </ScrollView>
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
