import "./App.css";
import { useAppSelector } from "./app/hook";

import { Question } from "./home/Question";
import QuizSummary from "./home/QuizSummary";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <>
      <div className="">
        <h1 className="text-center text-7xl my-10">Mojar mojar Quiz</h1>
        {!quizComplete ? <Question></Question> : <QuizSummary></QuizSummary>}
      </div>
    </>
  );
}

export default App;
