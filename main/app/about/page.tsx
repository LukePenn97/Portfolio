import Link from "next/link"
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page'
}

export default function About() {
  //throw new Error('whoopsy')
  return (
    <>
    <h1>About</h1>
    <Link href="/">Link to home page</Link>
    </>
  )
}
