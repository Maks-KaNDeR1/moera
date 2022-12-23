import { NavigateFunction } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { errorMessage, setStatus } from "../app-reducer";
import { AppThunkType } from "../store";
import { setUserProfile } from "./actions";


export const getUserProfile = (name: string, navigate: NavigateFunction): AppThunkType => async (dispatch) => {
    dispatch(setStatus(true))
    try {
        const res = await profileAPI.getUserProfie(name)
        dispatch(setUserProfile(res.data));

        navigate('/profile');
    }
    catch (e: any) {
        dispatch(errorMessage(e.response ? e.response.data.message : e.message))
    }
    finally {
        dispatch(setStatus(false))
    }
}


