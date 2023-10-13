'use client'
import { useUser } from '@clerk/nextjs';
import React from 'react'
import { UserButton } from '@clerk/nextjs';
import { FcBusinessman } from 'react-icons/fc';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


function SideCompo() {
    const { isSignedIn } = useUser();
  return (
    <div className={`top-[-38px] cursor-pointer absolute  right-20 z-50 ${isSignedIn ? "mr-10 top-[-60px]" : "top-[-145px]"}`}>{isSignedIn ? <UserButton  />: <Ava />}</div>
  )
}

export default SideCompo


function Ava() {
    return (
        <Avatar>
            <AvatarFallback className='border'><FcBusinessman /></AvatarFallback>
        </Avatar>
    )
}