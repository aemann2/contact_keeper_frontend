import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Index = () => {
    const [post, setPost] = useState(null)
    const URL = process.env.REACT_APP_BASE_URL + 'api/contacts/'

    useEffect(() => {
        axios.get(URL).then((response) => {
            setPost(response.data)
        })
    }, [URL])

    if (!post) return null

    return (
        <div>
            {post.map((post) => {
                return <h1>{post.name}</h1>
            })}
        </div>
    )
}

export default Index
