import React from 'react'
import { ModeToggle } from './toggle-button'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <div>
            Navbar
        </div>
        <div>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar