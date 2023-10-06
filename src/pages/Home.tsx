import usePosts from '../Hooks/usePosts'
import Post from '../components/Post'
import { useAuth } from '../provifers/AuthProvider'
import classes from './Home.module.css'

const Home = () => {
  const { isLoggedIn } = useAuth()
  console.log('from home:', isLoggedIn)
  const { posts, isLoading } = usePosts() // for Hooks
  if (isLoading) return <h1>Loading...</h1>

  const islogin = true
  return (
    <div className={classes.container}>
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
