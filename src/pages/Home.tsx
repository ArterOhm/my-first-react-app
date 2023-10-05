import { FormEvent, useState } from 'react'
import usePosts from '../Hooks/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'

const Home = () => {
  const { posts, isLoading, isSubmitPost, createPost } = usePosts() // for Hooks
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
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={hendleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setnewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setnewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitPost}>
          {isSubmitPost ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className={classes.feedContainer}>
        <h2>Feed</h2>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} isLoggedIn={islogin} />
          })}
      </div>
    </div>
  )
}

export default Home
