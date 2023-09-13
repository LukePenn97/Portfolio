import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page'
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is the Main Page</h1>
      <p>
        <Link href="/about">Link to about page</Link>
      </p>
      <br />
      <p>
        <Link href="/users">Link to users page</Link>
      </p>
    </main>
  )
}
