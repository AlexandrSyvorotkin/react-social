import React from 'react'
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div>
            <div className={s.pic}>
                <img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPost/>
        </div>
    )
}

export default Profile