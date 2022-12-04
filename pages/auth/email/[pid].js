import { useEffect } from "react"
import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    pid &&
      router.push({
        pathname: `/auth/login/reset_password_email`,
        query: {
          pid
        }
      })
  }, [pid])
  return <></>
}

export default Post
