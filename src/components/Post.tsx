import { Link } from 'react-router-dom'
import { PostDTO } from '../Types/dto'
import classes from './Post.module.css'
import { useState } from 'react'

interface IPostProps {
  post: PostDTO
  isLoggedIn: boolean
}

const Post = ({ post, isLoggedIn }: IPostProps) => {
  const { id, userId, title, body } = post
  const [isShow, issetShow] = useState<boolean>(true)

  const handleClick = () => {
    issetShow(!isShow)
  }

  return isLoggedIn ? (
    <div className={classes.post}>
      <Link to={`/post/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {id}</p>
        <p>postedBy: {userId}</p>
        <p>title: {title}</p>
        <p>body: {body}</p>
        {!isShow && <p>more post info...</p>}
        <button onClick={handleClick}>{isShow ? 'Show More' : 'Show Less'}</button>
      </Link>
    </div>
  ) : (
    <></>
  )
}

export default Post
