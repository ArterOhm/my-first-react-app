import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import { CreatePostDTO, PostDTO } from './Types/dto'
import Post from './components/Post'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setnewTitle] = useState<string>('')
  const [newBody, setnewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitPost, setIsSubmitPost] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)

      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const hendleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const newPostsBody :CreatePostDTO = {
      userId: Math.floor(Math.random()* 10000),
      title: newTitle,
      body: newBody,
    }
    setIsSubmitPost(!isSubmitPost)
    try {
      const res = await axios.post<PostDTO[]>('https://jsonplaceholder.typicode.com/posts',newPostsBody
      )
      
      console.log(res.data)

    } catch (err) {
      console.error(err)
    }

    setnewTitle('')
    setnewBody('')
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
