import { ProfileType } from "../../api/profile-types"

export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const setUserProfile = (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const)


export type ProfileActionsType = ReturnType<typeof setUserProfile>