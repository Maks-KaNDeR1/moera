import { ProfileActionsType, SET_USER_PROFILE } from "./actions";
import { initialProfileStateType, initialState } from "./state";


export const profileReducer = (state = initialState, action: ProfileActionsType): initialProfileStateType => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
};

export default profileReducer
