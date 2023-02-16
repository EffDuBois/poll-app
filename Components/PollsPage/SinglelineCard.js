import { useState } from "react";
import InputField from "../Util/InputField";
import QuestionCard from "./QuestionCard";



export default function SinglelineCard({answerHandler}) {

    const [inputValue, setinputValue] =  useState("");

    const answerHandler = () => {
        setinputValue(value);
        answerHandler(inputValue);
    }

    return(
        <QuestionCard>
            <InputField value={inputValue} onChangeText={(value)=>{answerHandler(value)}}/>
        </QuestionCard>
    )
}