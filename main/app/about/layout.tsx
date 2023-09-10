import styles from './styles.module.css'


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar
        <main className={styles.main}>
          {children}
        </main>
      </nav>
    </>
  )
}