import { FlatList, View, RefreshControl, ScrollView } from "react-native";
import GlobalStyles from "../StyleComponents/GlobalStyles";
import AppText from "../Util/AppText";
import Background from "../Util/Background";
import Hero from "../Util/Hero";
import Menu from "../Util/Menu";
import McqCard from "./McqCard";
import QuestionCard from "./QuestionCard";
import SinglelineCard from "./SinglelineCard";

import { useSelector, useDispatch } from "react-redux";
import { getPollList, postPollAnswer } from "../Redux/Actions/Polls";
import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";



export default function PollsPage() {


  const [answer, setanswer] = useState("");
  const { poll_list } = useSelector((state) => state.pollListReducer);
  const [answerValue, setanswerValue] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPollList());
  }, []);

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getPollList()); //getter function
    setRefreshing(false);
  };

  const answerHandler = (answer) => {
    setanswer(answer);
    
    dispatch(postPollAnswer(answer));
  };
  return (
    <Background>
      <Hero title={"Polls"} />
      <Menu>
        <AppText style={GlobalStyles.headerText}>Current Polls</AppText>
        
        <FlatList
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }

          data={poll_list}

          renderItem={({ item }) => {
            itme.answer_type == "mcq" ? (
              <McqCard 
                question={item.question} 
                option_1={item.answer1} 
                option_2={item.answer2} 
                option_3={item.answer3} 
                option_4={item.answer4} 
                setanswerValue={setanswerValue} 
                onSubmit={answerHandler}
              />

            ) : item.answer_type == "s_line" ? (
              <SinglelineCard 
                question={item.question} 
                answer={answer} 
                setanswerValue={setanswerValue}
                onSubmit={answerHandler}
              />

            ) : itme.answer_type == "rting" ? (
              <RatingCard 
                question={item.question} 
                setanswerValue={setanswerValue}
                onSubmit={answerHandler}
                />

            ) : (
              console.log("invalid question type at" + item.poll_id)
            );
          }}
        />
      </Menu>
    </Background>
  );
}
