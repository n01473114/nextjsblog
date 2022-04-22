import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className='container'>
        <Link href='/' passHref>
          <h1 className='header-home'>AMIDI Blog</h1>
        </Link>
      </nav>
    </header>
  )
}
