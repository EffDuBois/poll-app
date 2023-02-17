import { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import EventCard from "../Util/EventCard";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import SelectArray from "./SelectArray";

import { useSelector, useDispatch } from "react-redux";
import { getEventList } from "../Redux/Actions/Event";
import { useNavigation } from "@react-navigation/native";

export default function EventsPage() {

  const navigation = useNavigation();

  const { event_list } = useSelector((state) => state.eventListReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getEventList(timeframe));
  })

  const [timeframe, settimeframe] = useState("current");

  const listSelector = (switchNumber) => {
    switchNumber == 0
      ? settimeframe("Past")
      : switchNumber == 1
      ? settimeframe("current")
      : switchNumber == 2
      ? settimeframe("upcoming")
      : console.log("listNumberExceedException");
    onRefresh()
  };

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getEventList(timeframe));
    setRefreshing(false);
  };

  return (
    <View style={GlobalStyles.background}>
      <Hero title={"Events"} />
      <Menu>
        <SelectArray selectListFunction={listSelector} />
        <FlatList
          refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
          }
          data={event_list}
          renderItem={({ item }) => (
            <EventCard 
              key={item.event_id} 
              name={item.event_name} 
              onPress={navigation.navigate("EventDetailPage", item.event_id)}
            />
          )}
        />
      </Menu>
    </View>
  );
}
