import { LOGOUT_USER, NEW_USER } from "../../actions";
import { UserAction, UserState } from "./types/reducers";

const initialState: UserState = {
    username: ''
}

const user = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case NEW_USER:
            return {
                ...state,
                username: action.username
            }
        case LOGOUT_USER:
            return {
                ...state,
                username: ''
            }
        default:
            return state;
    }
}

export default user; 