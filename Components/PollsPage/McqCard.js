import QuestionCard from "./QuestionCard";
import RadioArray from "./RadioArray";


export default function McqCard({answerHandler}) {
    const optionSelect = (option) => {
        answerHandler(option);
    }

    return(
        <QuestionCard style={{height: '40%'}}>
            <RadioArray option_1={true} option_2={true} option_3={true} option_4={true} selectOptionFunction={optionSelect}/>
        </QuestionCard>
    )
}