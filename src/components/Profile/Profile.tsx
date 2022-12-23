import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../utils/hook'
import s from './Profile.module.scss'

type PropsType = {
    domain: string
}

export const Profile: React.FC<PropsType> = ({ domain }) => {

    const profile = useAppSelector(state => state.profile.profile)
    const navigate = useNavigate()

    useEffect(() => {
        !profile.fullName && navigate('/')
    }, [navigate, profile.fullName])

    return (
        <div className={s.profileBlock}>
            <div className={s.header}>
                <h2>
                    profile
                </h2>
            </div>

            <div className={s.container} >
                <div className={s.profileView} >
                    <img src={`https://${domain}/moera/media/${profile.avatar.path}`} alt="" />

                    <div className={s.desc} >
                        <div className={s.fullName}>
                            {profile.fullName}
                            <em>{profile.gender}</em>
                        </div>
                        <div className={s.name}>
                            <span> {`@${domain.slice(0, -11)}`}</span>
                        </div>
                        <div className={s.title}>{profile.title}</div>
                        <div dangerouslySetInnerHTML={{ __html: profile.bioHtml }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
