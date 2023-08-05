import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavbarMain() {
  return (
    <div className=' mx-36  mt-6 flex justify-between items-center'>
      {/* <Image src='/logo.mhtml' fill alt='' /> */}
      <div>
        <h3 className='text-3xl'>Quizo</h3>
      </div>
      <div className='flex justify-around items-center gap-16'>
        <Link href='/' className='text-lg bold hover:outline rounded-md px-3 py-2'>Home</Link>
        <Link href="" className='text-lg bold hover:outline rounded-md px-3 py-2'>Pricing</Link>
        <Link href="/login" className='text-lg bold hover:outline rounded-md px-3 py-2'>Login</Link>
      </div>
    </div>
  )
}

export default NavbarMain