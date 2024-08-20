"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const Header = () => {
    const {user} = useKindeBrowserClient()

  return (
    <header className='flex justify-between items-center w-full h-16 border-2'>
        Header
    </header>
  )
}

export default Header