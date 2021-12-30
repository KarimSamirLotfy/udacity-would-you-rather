import { LOG_OUT, SET_AUTHED_USER } from "../actions/authedUser";
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.authedUser, // much better for reasons beond my understanding
      };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}
