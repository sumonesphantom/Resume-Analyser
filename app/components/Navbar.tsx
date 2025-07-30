import React from 'react'
import { Link } from 'react-router'
import { usePuterStore } from '~/lib/puter'

const Navbar = () => {
  const { isLoading, auth } = usePuterStore();
  return (
    <nav className='navbar'>
      <Link to='/'>
        <p className='text-2xl font-bold text-gradient'>Resume Analyzer</p>
      </Link>
      <div className='flex flex-row gap-4 '>
        <Link to='/upload'>
          <p className='primary-button w-fit bg-sky-800'>Upload Resume</p>
        </Link>
        {!auth.isAuthenticated && (
          <button className='primary-button w-fit bg-sky-800' onClick={auth.signOut}>
            <p>Log Out</p>
          </button>)}
      </div>
    </nav>
  )
}

export default Navbar