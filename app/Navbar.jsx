import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/blog">Articles</Link></p>
        <p><Link href="/about">About</Link></p>
    </div>
  )
}

export default Navbar