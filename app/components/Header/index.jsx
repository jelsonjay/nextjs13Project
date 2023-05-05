import Link from 'next/link'
import './header.scss'


const index = () => {
  return (
    <>
    <header className='header'>
    <div className="container">
      <div className="left">
        <Link href='/' className='brand'>Blog  <span>JJ</span></Link>
      </div>

      <div className="rigth">
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/info'>Info</Link>
      <Link href='/code/repos'>My repo</Link>
      </div>
    </div>
    </header>
    <hr />
    </>
  )
}

export default index
