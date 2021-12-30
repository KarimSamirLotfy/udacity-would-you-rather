import { Answer_Question,  } from "../actions/Questions";

const NoCheating = (store) => (next) => (action) => {
  // Here we Log evrything for debuging
  console.group('Cheater detector')
  if(action.type === Answer_Question) {
    console.log(action);
    console.log(store.getState())
    const state = store.getState()
    const user = state.users[action.authedUser]
    const questions_already_answered = Object.keys(user['answers'])
    console.log(questions_already_answered);
    if(questions_already_answered.includes(action.qid)){
        console.log(`${user['id']} already answered question ${action.qid}`)
        alert('Can not change your answer')
        return
    }
  }
  console.groupEnd()

  return next(action)
};

export default NoCheating;
