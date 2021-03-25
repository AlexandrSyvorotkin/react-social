import React from 'react'
import s from './MyPost.module.css'
import Post  from './Post/Post'

const MyPost = () => {
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                New post
            </div>
            <Post message={'Hi, how are you'}/>
            <Post message={"It's my first post"}/>
            <Post/>
        </div>
    )
}

export default MyPost