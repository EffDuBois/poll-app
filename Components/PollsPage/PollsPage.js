import { View } from "react-native";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";

export default function PollsPage() {
  return (
    <Background>
      <Hero title={"Polls"}/>
      <Menu></Menu>
    </Background>
  );
}
