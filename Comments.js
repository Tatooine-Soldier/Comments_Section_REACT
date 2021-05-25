import React from 'react'
import Comment from './Comment.js'

export default function Comments({comments}) {
    return (
        comments.map(comment => {return <Comment key={comment.id} comment={comment}/>})
        
    )
}
