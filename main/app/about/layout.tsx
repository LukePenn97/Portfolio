export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar
        <main>
          {children}
        </main>
      </nav>
    </>
  )
}