import { View, StyleSheet, RefreshControl, FlatList } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintCard from "../Util/ComplaintCard";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getComplaintList } from "../Redux/Actions/Complaint";

export default function ComplaintsMenu() {
  const { complaintList } = useSelector((state) => state.complaintListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComplaintList());
  }, []);

  //refreshing state and funciton
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getComplaintList()); //getter function
    setRefreshing(false);
  };


  return (
    <View style={[GlobalStyles.menu, styles.menu]}>
      <AppText style={GlobalStyles.headerText}>History</AppText>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }
        data={complaintList}
        renderItem={({ item }) => (
          <ComplaintCard
            key={item.complaint_id}
            title={item.issue}
            status={item.status}
          />
        )}
      />
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
