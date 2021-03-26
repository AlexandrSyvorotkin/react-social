import React from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = () => {

    let PostsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>ddwa</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className='s.posts'>
                <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount}/>
                <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount}/>
            </div>

        </div>
    )
}

export default MyPost