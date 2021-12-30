import { combineReducers } from "redux";
import  reducerUSers  from "./users.js";
import authedUser from './authedUser'
import questions from './questions'

export default combineReducers({
  users:reducerUSers,
  authedUser,
  questions,
});