import { View } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import McqCard from "./McqCard";
import QuestionCard from "./QuestionCard";
import SinglelineCard from "./SinglelineCard";

import { useSelector, useDispatch } from "react-redux";
import { getPollList } from "../Redux/Actions/Polls";

export default function PollsPage() {
  const answerHandler= (answer) {
    
  }
  return (
    <Background>
      <Hero title={"Polls"}/>
      <Menu>
        <AppText style={GlobalStyles.headerText}>Current Polls</AppText>




        {/* <McqCard answerHandler={answerHandler}/>
        <SinglelineCard answerHandler={answerHandler}/> */}

      </Menu>
    </Background>
  );
}

