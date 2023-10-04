import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import { PostDTO } from './Types/dto'
import Post from './components/Post'
import { FormEvent, useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setnewTitle] = useState<string>('')
  const [newBody, setnewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        if (!res.ok) {
          throw new Error('error')
        }

        setPosts(data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const hendleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!posts) return
    const currentPosts = [...posts]
    currentPosts.push({
      id: Math.floor(Math.random() * Math.random() * 10000),
      userId: Math.floor(Math.random() * Math.random() * 10000),
      title: newTitle,
      body: newBody,
    })
    setPosts(currentPosts)

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

        <button type="submit">Submit</button>
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
