import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>This is the Main Page</h1>
      <Link href="/about">Link to about page</Link>
    </main>
  )
}
