import { ProfileType } from "../../api/profile-types"

export type initialProfileStateType = {
    profile: ProfileType
}

export let initialState: initialProfileStateType = {
    profile: {
        fullName: '',
        gender: '',
        // email: '',
        title: '',
        // bioSrc: '',
        // bioSrcFormat: '',
        bioHtml: '',
        avatar: {
            id: '',
            mediaId: '',
            path: '',
            width: 0, // int
            height: 0, // int
            shape: '',
            ordinal: 0, // int
        },
        fundraisers: [{
            title: '',
            qrCode: '',
            text: '',
            href: '',
        }],
        operations: {
            edit: '',
            viewEmail: ''
        },
    }
}
