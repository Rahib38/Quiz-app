import { nextQuestion, previousQuestion, setAnswer } from "@/app/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Question() {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const handleAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  const handleNext = () => {
    dispatch(nextQuestion());
  };
  const handlePrevious = () => {
    dispatch(previousQuestion());
  };
  return (
    <div className=" flex justify-center ">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question: {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerChange(option)}
              className="w-full mt-3"
            >
              {option}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePrevious} variant="outline">Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
