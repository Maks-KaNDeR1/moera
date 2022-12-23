import { ProfileType } from './profile-types';
import axios, { AxiosResponse } from 'axios'

export const profileAPI = {
    getUserProfie: (name: string): Promise<AxiosResponse<ProfileType>> =>
        axios.get<ProfileType>(`https://${name}/moera/api/profile`)
}
