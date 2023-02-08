import { useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import BackButton from "../Util/BackButton";
import Background from "../Util/Background";
import EventCard from "../Util/EventCard";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

export default function EventsPage() {

  const [PastEventList, setPastEventList] = useState([
    { name: "Past Event 1" },
  ]);

  const [PresentEventList, setPresentEventList] = useState([
    { name: "Present Event 1" },
  ]);

  const [FutureEventList, setFutureEventList] = useState([
    { name: "Future Event 1" },
  ]);

  const [ListInUse, setListInUse] = useState(PresentEventList);

  const listSelector = (switchNumber) => {
    switchNumber == 0
      ? setListInUse(PastEventList)
      : switchNumber == 1
      ? setListInUse(PresentEventList)
      : switchNumber == 2
      ? setListInUse(FutureEventList)
      : console.log("listNumberExceedException");
  };

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setPastEventList(/*getter Function here*/[...PastEventList, { name: "Past Event 2" }])
    setPresentEventList(/*getter Function here*/[...PresentEventList, { name: "Present Event 2" }])
    setFutureEventList(/*getter Function here*/[...FutureEventList, { name: "Future Event 2" }])
    setRefreshing(false);
  };

  return (
    <Background>
      <BackButton />
      <Hero>Events</Hero>
      <Menu>
        <SelectArray selectListFunction={listSelector} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
          }
        >
          {ListInUse.map((item) => {
            return <EventCard key={item.name} name={item.name} />;
          })}
        </ScrollView>
      </Menu>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonArray: {
      flexDirection: "row",
  }
})
