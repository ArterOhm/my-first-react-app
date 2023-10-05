import { FormEvent, useState } from 'react'
import usePosts from '../Hooks/usePosts'
import classes from './Create.module.css'

const Create = () => {
  const { isLoading, isSubmitPost, createPost } = usePosts() // for Hooks
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
  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={hendleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setnewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setnewBody(e.target.value)} required />
        <button type="submit" disabled={isSubmitPost}>
          {isSubmitPost ? 'Post...' : 'Post'}
        </button>
      </form>
    </div>
  )
}

export default Create
