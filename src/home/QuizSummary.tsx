import { useAppSelector } from "@/app/hook";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizSummary() {
  const { question, userAnswers } = useAppSelector((state) => state.quiz);
  const correctAnswersCount = question.reduce((count, qna, index) => {
    return qna.correctAnswer === userAnswers[index] ? count + 1 : count;
  }, 0);
  const incorrectAnswersCount = question.reduce((count, qna, index) => {
    return qna.correctAnswer !== userAnswers[index] ? count + 1 : count;
  }, 0);
  const correctParcentage = parseFloat(
    ((correctAnswersCount / question.length) * 100).toFixed(2)
  );

  const percentate = () => {
    if (correctParcentage <= 100 && correctParcentage >= 70) {
      return " Very Good";
    } else if (correctParcentage >= 50 && correctParcentage <= 70) {
      return " Motamoti vala korcen";
    } else if (correctParcentage >= 30 && correctParcentage <= 50) {
      return " Apnare aro valo korte hobe!";
    } else {
      return " Apni fail, side za hala!";
    }
  };
  return (
    <div>
      <div className=" flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Quiz Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold">
              you got {correctAnswersCount} out of {question.length}
            </h4>
            <div className="my-2">
              <Progress className="bg-yellow-400" value={correctParcentage} />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1>{correctParcentage}%</h1>
              </div>
              <div>
                <h1>
                  Performance:
                  {percentate()}
                </h1>
              </div>
            </div>
            <div>
              <h2>Incorrect Answer: {incorrectAnswersCount}</h2>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
