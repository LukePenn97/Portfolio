import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import {Suspense} from 'react'
import UserPosts from './components/UserPosts'
import Link from 'next/link'
type Params = {
  params: {
    userId: string
  }
}

export default async function UserPage({ params: {userId} }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)
  
  //const [user, userPosts] = await Promise.all([userData, userPostsData])
  
  const user = await userData

  return (
    <>
      <Link href='/users'>Back to Users</Link>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}
