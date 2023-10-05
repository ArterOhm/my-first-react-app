import { useEffect, useState } from 'react'
import axios from 'axios'
import { PostDTO } from '../Types/dto'
import { useParams } from 'react-router'

const usePost = () => {
  const { id } = useParams()
  const [PostID, setPostID] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setPostID(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { PostID, isLoading }
}

export default usePost
