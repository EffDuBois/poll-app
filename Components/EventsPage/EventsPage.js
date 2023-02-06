import { useState } from "react";
import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import EventCard from "../Util/EventCard";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import SelectArray from "./SelectArray";

export default function EventsPage() {

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setComplaintList([...ComplaintList, { name: "added element", status: "Solved" }]); //add getter function instead of added element
    setRefreshing(false);
  }


  const [PresentEventList, setPresentEventList] = useState([
    {name: "Event 1"},
  ])

  const [PastEventList, setPastEventList] = useState([
    {name: "Event 1"},
  ])

  const [FutureEventList, setFutureEventList] = useState([
    {name: "Event 1"},
  ])

  return (
    <View style={GlobalStyles.background}>
      <BackButton />
      <Hero>Events</Hero>
      <Menu>
        <SelectArray/>
        {PresentEventList.map((item) => {
          return(
          <EventCard key={item.name}
          name={item.name} />)
        })}
      </Menu>
    </View>
  );
}
