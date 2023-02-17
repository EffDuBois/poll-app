import QuestionCard from "./QuestionCard";
import RadioArray from "./RadioArray";


export default function McqCard({question, option_1, option_2, option_3, option_4, setanswerValue, onSubmit}) {
    
    return(
        <QuestionCard onSubmit={onSubmit} question={question}>
            <RadioArray option_1={option_1} option_2={option_2} option_3={option_3} option_4={option_4} selectOptionFunction={setanswerValue}/>
        </QuestionCard>
    )
}