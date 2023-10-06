import usePost from '../Hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { PostID, isLoading } = usePost()
  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className={classes.feedContainer}>
      <div className={classes.PostDetail}>
        <h1>{PostID?.title}</h1>
        <p>postedBy : {PostID?.userId}</p>
        <p>{PostID?.body}</p>
      </div>
    </div>
  )
}

export default PostDetail
