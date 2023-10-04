import './App.css'

import Post from './components/Post'
import { FormEvent, useState } from 'react'

import usePosts from './Hooks/usePosts'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'

function App() {
  const { posts, isLoading, isSubmitPost, createPost } = usePosts()
  const [newTitle, setnewTitle] = useState<string>('')
  const [newBody, setnewBody] = useState<string>('')


  const hendleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      await createPost(newTitle, newBody)
      setnewTitle('')
      setnewBody('')
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  const islogin = true
  return (
    <div className="App">
      <Navbar />
      <Greeting name="F" age={30} isLoggedIn={islogin} />
      <form onSubmit={hendleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setnewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setnewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitPost}>{isSubmitPost? 'Post...':'Post'}</button>
      </form>

      <div className="feed-container">
        {posts && posts.map((post) => {
          return <Post key={post.id} post={post} isLoggedIn={islogin} />
        })}
      </div>
    </div>
  )
}

export default App
