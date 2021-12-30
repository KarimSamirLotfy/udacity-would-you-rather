import {
  Answer_Question,
  GET_QUESTIONS,
  ADD_QUESTION,
} from "../actions/Questions";
export default function (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        // users: action.users,
        ...action.questions,
      };
    case Answer_Question:
      //console.log(`${JSON.stringify(state)}->${state.questions}`);
      // check to make sure thisuser did not already choose an answer to this quesiton
     
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [
              ...state[action.qid][action.answer].votes,
              action.authedUser,
            ],
          },
        },
      };

      case ADD_QUESTION:
          return {
              ...state,
              [action.question['id']]:action.question,
          }
    default:
      return state;
  }
}
