import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  return (
    <div>
      homepage test
        <ul>
        <li><Link href="/"> HOME</Link></li>
        <li><Link href="/about"> ABOUT PAGE</Link></li>
        <li><Link href="/about/info"> INFO PAGE</Link></li>
      </ul>
    </div>
  )
}

export default HomePage
