import './App.css';
import Comment from './components/Comment.js'
import Comments from './components/Comments.js'
import { useState, useRef, useEffect } from 'react'

const LOCAL_STORAGE_KEY = "comments_sectionApp.comments"

function App() {
  const commentsRef = useRef()
  const [comments, setComments] = useState([])


  useEffect(() => {       //makes todos stay even after reload page
    const storedComments = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //parse this string to an array
    if (storedComments) setComments(storedComments)   //if there are todos in memory, display them on reload
  }, [])

  useEffect(() => {       //saves 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments)) //ensure todos saved as strings
  }, [comments])   //any time todos changes, we save them

  function handleNewComment(e) {
    let d = new Date()
    let n = String(d)
    let box = document.getElementById('commentBox')
    if (commentsRef.current.value === "") {
      box.value = "Nothing entered"
    } else {
      setComments(prevComments => {return [...prevComments, {id:Math.random(0,10000), text:box.value, time:n}]})
    }
    
  }

  return (
    <div className="App">
      <section>
        In production
      </section>
      <section>
      </section>  
      <section>
          <section className="comment_input_container">
            <label>
                <form id="comments_form">
                    <input type='text' id="commentBox" placeholder='Say something...' ref={commentsRef}/>
                    <button onClick={handleNewComment}>Post</button>

                    <button id="sign_in">Sign In</button>
                </form>
            </label>
          </section>
          <section className="comments_container">
            <Comments comments={comments}/>
          </section>
      </section>
    </div>
  );
}

export default App;
