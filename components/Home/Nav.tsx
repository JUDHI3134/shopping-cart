import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
      <div className='flex justify-between items-center w-[95%] md:w-4/5 mx-auto h-full'>
        {/* logo */}
        <Link href={"/"}>
            {/* <Image src="/images/logo.png" alt="" width={140} height={140}/> */}
            <h1 className='text-2xl font-bold text-orange-600'>ShopCart</h1>
        </Link>
        <div className='flex items-center space-x-6'>
            {/* searchBox */}
            <SearchBox/>
            <HeartIcon size={26} cursor={"Pointer"}/>
            {/* shopping cart Button */}
            <ShoppingCartButton/>
            <UserIcon size={26} cursor={"Pointer"}/>
        </div>
      </div>
    </div>
  )
}

export default Nav
