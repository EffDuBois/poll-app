import { View, StyleSheet, RefreshControl, FlatList } from "react-native";
import AppText from "../Util/AppText";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import ComplaintCard from "../Util/ComplaintCard";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getComplaintList } from "../Redux/Actions";

export default function ComplaintsMenu() {
  const { complaintList } = useSelector((state) => state.complaintReducer);
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

  //complaint list state
  // const [ComplaintList, setComplaintList] = useState([
  // { name: "Broken road", status: "Solved" },
  // { name: "Dirty Road", status: "Processing" },
  // { name: "Build Highway", status: "Declined" },
  // { name: "Broken roa", status: "Solved" },
  // { name: "Dirty Roa", status: "Processing" },
  // { name: "Build Higway", status: "Declined" },
  // { name: "Broken ad", status: "Solved" },
  // { name: "Dirtyoad", status: "Processing" },
  // { name: "Bui Highway", status: "Declined" },
  // ]);

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
