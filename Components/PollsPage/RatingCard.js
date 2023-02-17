import QuestionCard from "./QuestionCard";
import RadioArray from "./RadioArray";

export default function RatingCard({question, setanswerValue, onSubmit }) {
  return (
    <QuestionCard onSubmit={onSubmit} question={question}>
      <RadioArray
        option_1={"1"}
        option_2={"2"}
        option_3={"3"}
        option_4={"4"}
        option_5={"5"}
        selectOptionFunction={setanswerValue}
        style={{ flexDirection: "row" }}
      />
    </QuestionCard>
  );
}
