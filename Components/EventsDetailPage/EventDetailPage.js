import AppText from "../Util/AppText";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

export default function EventDetailPage() {
  return (
    <Background>
      <Hero title={"/Event Name"} />
      <Menu>
        <AppText>Event Details</AppText>
      </Menu>
    </Background>
  );
}
