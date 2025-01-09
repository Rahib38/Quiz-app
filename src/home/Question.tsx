import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
  setAnswer,
} from "@/app/features/quiz/quizSlice";
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
  const { question, currentQuestionIndex, userAnswers ,} = useAppSelector(
    (state) => state.quiz
  );
  const currentAnswers = userAnswers[currentQuestionIndex];
  const isAnswerSeleted = userAnswers[currentQuestionIndex] !== null;
  const isCompleteQuiz = isAnswerSeleted || currentQuestionIndex !== question.length-1;
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
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
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
              variant={option === currentAnswers ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex < question.length - 1 && (
            <Button disabled={!isAnswerSeleted} onClick={handleNext}>Next</Button>
          )}
          {currentQuestionIndex === question.length - 1 && (
            <Button disabled={!isCompleteQuiz} onClick={handleCompleteQuiz}>Complete Quiz</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
