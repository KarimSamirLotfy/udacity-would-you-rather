import { _getUsers } from "../utils/_DATA"

export const SET_AUTHED_USER = 'AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'
export const LOG_OUT = 'LOG_OUT'
export function set_authed_user(id){
    return (dispatch) =>{
      return _getUsers().then((users_obj)=>{
        const action = {
          type:SET_AUTHED_USER,
          authedUser:users_obj[id]
        }
        dispatch(action)
      })
    }
}

export function logout(){
  return {
    type:LOG_OUT,
  }
}

