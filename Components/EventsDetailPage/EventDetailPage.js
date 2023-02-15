import { useEffect } from "react";
import { StyleSheet } from "react-native";
import AppText from "../Util/AppText";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

import { useSelector, useDispatch } from "react-redux";
import { getEventDetails } from "../Redux/Actions/Event";

export default function EventDetailPage({route}) {

    const {event_id} = route.params;
    const {eventDetails} = useSelector((state)=>state.eventDetailsReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getEventDetails(event_id))
    })

  return (
    <Background>
      <Hero title={"/Event Name"}>
        <AppText style={styles.heroText}>Date & Time: {eventDetails.start_datetime}-{eventDetails.end_datetime}</AppText>
        <AppText style={styles.heroText}>Venue: {eventDetails.location}</AppText>
      </Hero>
      <Menu style={{ height: "60%" }}>
        <AppText style={{ margin: 20 }}>Event Details</AppText>
      </Menu>
    </Background>
  );
}

const styles = StyleSheet.create({
    heroText: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "700",
    }
})
