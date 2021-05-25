import React from 'react'
// import DateTime from 'react-datetime'

export default function Comment({comment}) {
    // let time = new DateTime()
    return (
        <div className="each_comment">
            <section className="comment_text">
                {comment.text} 
            </section>   
            <i>{comment.time}</i>
        </div>
    )
}
