import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../utils/_DATA";

export const GET_QUESTIONS = "GET_QUESTIONS"; // Action type
export const Answer_Question = 'Answer_Question'
export const ADD_QUESTION = 'ADD_QUESTION'
// action async Creator that creates an action of type GET_USERS with property users
export function get_questions() {
  return (dispatch) => {
    return _getQuestions().then((questions_obj) => {
      const action = {
        type: GET_QUESTIONS,
        questions: questions_obj,
      };
      dispatch(action);
    })
  }
}

export function answerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(()=>{
        const action = {
          type: Answer_Question,
          qid,
          answer,
          authedUser,
        };
        dispatch(action)
    })
  };
}

export function saveQuestion({ authedUser, optionOne, optionTwo }) {
    // Optimistic Updates 
  return (dispatch) => {
     
    return _saveQuestion({
      author: authedUser["id"],
      optionOneText: optionOne,
      optionTwoText:optionTwo,
    }).then((question) => {
      const action = {
        type: ADD_QUESTION,
        question: question,
      };
      dispatch(action);
    });
  };
}