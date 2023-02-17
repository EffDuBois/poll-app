import { useState } from "react";
import InputField from "../Util/InputField";
import QuestionCard from "./QuestionCard";



export default function SinglelineCard({ question, answerValue, setanswerValue, onSubmit}) {

    return(
        <QuestionCard onSubmit={onSubmit} question={question}>
            <InputField value={answerValue} onChangeText={(value)=>{setanswerValue(value)}}/>
        </QuestionCard>
    )
}