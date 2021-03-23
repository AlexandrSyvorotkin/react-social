import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                New post
            </div>
            <div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
            </div>
            </div>
        </div>
    )
}

export default Profile