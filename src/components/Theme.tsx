'use client'

import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useUser } from '@clerk/nextjs'

function Theme() {
    const { isSignedIn } = useUser()
  return (
    <ThemeToggle className={`absolute  right-6 z-50 ${isSignedIn ? "top-[-60px] ": "top-[-145px]"}`} />
  )
}

export default Theme