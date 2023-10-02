import { PostDTO } from '../Types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
  isLoggedIn: boolean
}

const Post = ({ post, isLoggedIn }: IPostProps) => {
  const { id, userId, title, body } = post
  const handlaClick = (id: number) => {
    alert(`clicked ${id}`)
  }
  return isLoggedIn ? (
    <div onClick={() => handlaClick(id)} className={classes.post}>
      <p>id: {id}</p>
      <p>postedBy: {userId}</p>
      <p>title: {title}</p>
      <p>body: {body}</p>
    </div>
  ) : (
    <></>
  )
}

export default Post
