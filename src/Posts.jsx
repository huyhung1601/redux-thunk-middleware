import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './redux/postsAction'

const Posts = () => {
    const dispatch = useDispatch()        
    const posts = useSelector(state => state)
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    console.log(posts)
    return (
        <div>
            {posts.map((post,index)=>(
                <h3 key={index}>{post.name}</h3>
            ))}
        </div>
    )
}

export default Posts
