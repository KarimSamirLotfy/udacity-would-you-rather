import { GET_USERS } from "../actions/users";
import {set_authed_user, SET_AUTHED_USER} from '../actions/authedUser'
export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        // users: action.users,
        ...action.users,
      };

    default:
      return state;
  }
}
