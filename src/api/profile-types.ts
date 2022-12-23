export type AvatarInfo = {
    id: string
    mediaId: string
    path: string
    width: number // int
    height: number // int
    shape: string
    ordinal: number // int
}

export type FundraiserInfo = {
    title: string
    qrCode: string
    text: string
    href: string
}

export type ProfileType = {
    fullName: string
    gender: string
    // email: string
    title: string
    // bioSrc: string
    // bioSrcFormat: string
    bioHtml: string
    avatar: AvatarInfo
    fundraisers: FundraiserInfo[]
    // operations: string | string[]
    operations: {
        edit: string
        viewEmail: string
    }
}