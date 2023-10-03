import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import { PostDTO } from './Types/dto'
import Post from './components/Post'
import { FormEvent, useState } from 'react'

const IPosts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
]

function App() {
  const [posts, setPosts] = useState<PostDTO[]>(IPosts)
  const [newTitle, setnewTitle] = useState<string>('')
  const [newBody, setnewBody] = useState<string>('')

  const hendleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const currentPosts = [...posts]
    currentPosts.push({
      id: Math.floor(Math.random() * Math.random() * 10000),
      userId: Math.floor(Math.random() * Math.random() * 10000),
      title: newTitle,
      body: newBody,
    })
    setPosts(currentPosts)
  }

  const islogin = true
  return (
    <div className="App">
      <Navbar />
      <Greeting name="F" age={30} isLoggedIn={islogin} />
      <form onSubmit={hendleSubmit}>
        <label>Title</label>
        <input type="text" onChange={(e) => setnewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" onChange={(e) => setnewBody(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>

      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} isLoggedIn={islogin} />
        })}
      </div>
    </div>
  )
}

export default App
