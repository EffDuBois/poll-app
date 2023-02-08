import { useState } from "react";
import { StyleSheet, View } from "react-native";
import BackButton from "../Util/BackButton";
import Background from "../Util/Background";
import EventCard from "../Util/EventCard";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

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
    <Background>
      <BackButton />
      <Hero>Events</Hero>
      <Menu>
      <View style={styles.buttonArray} >
            <SelectButton buttonName={"Past"} />
            <SelectButton buttonName={"Present"} />
            <SelectButton buttonName={"Future"} />
        </View>
        {PresentEventList.map((item) => {
          return(
          <EventCard key={item.name}
          name={item.name} />)
        })}
      </Menu>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonArray: {
      flexDirection: "row",
  }
})
