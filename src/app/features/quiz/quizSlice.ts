import { quizData } from "@/home/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface TQuiz {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizComplete: boolean;
}

const initialState: TQuiz = {
  question: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
      // console.log(answer,questionIndex)
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex += 1;
        console.log(state.currentQuestionIndex)
      }
    },
    previousQuestion:(state)=>{
      if(state.currentQuestionIndex>0){
        state.currentQuestionIndex -=1
      }
    }
  },
});

// Action creators are generated for each case reducer function
// export const {  } = quizSlice.actions
export const { setAnswer, nextQuestion,previousQuestion } = quizSlice.actions;
export default quizSlice.reducer;
