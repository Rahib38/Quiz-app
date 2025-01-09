import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  question:typeof quizData,
  currentQuestionIndex:number,
  userAnswers:(string |null)[],
  quizComplete:boolean
}


const initialState:TQuiz = {
  question:quizData,
  currentQuestionIndex:0,
  userAnswers:Array(quizData.length).fill(null),
  quizComplete:false
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer:(state,action)=>{
const {questionIndex,answer}=action.payload
console.log(answer,questionIndex)
    }
  },
});

// Action creators are generated for each case reducer function
// export const {  } = quizSlice.actions
export const {setAnswer}=quizSlice.actions
export default quizSlice.reducer;
