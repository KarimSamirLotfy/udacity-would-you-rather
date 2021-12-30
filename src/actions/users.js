import { _getUsers } from "../utils/_DATA";

export const GET_USERS = 'GET_USERS' // Action type 

// action async Creator that creates an action of type GET_USERS with property users
export function get_users(){
    return (dispatch) =>{
        return _getUsers().then((users_obj)=>{
            const action = {
                type: GET_USERS,
                users:users_obj
            }
            dispatch(action)
        })
    }
}