import { useEffect, useState } from 'react'
import axios from 'axios'
import { CreatePostDTO, PostDTO } from '../Types/dto'

const usePosts = () => {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
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

  const createPost = async (newTitle: string, newBody: string) => {
    const newPostBody: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    setIsSubmitPost(true)
    try {
      const res = await axios.post<PostDTO>('https://jsonplaceholder.typicode.com/posts', newPostBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      console.log(res.data)
    } catch (err) {
      throw new Error('Cannot create post')
    } finally {
      setIsSubmitPost(false)
    }
  }

  return { posts, isLoading, isSubmitPost, createPost }
}

export default usePosts
