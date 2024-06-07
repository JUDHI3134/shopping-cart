import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12'>
      <div className='w-4/5 border-b-[1.2px] pb-8 mx-auto border-b-slate-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        
        <div>
            <h1 className='text-[25px] font-bold mb-4 text-orange-600'>ShopCart</h1>
            <p className='text-sm text-black opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam odio optio? Quae dolor fugiat temporibus maxime tenetur modi eaque?</p>
            <p className='text-base text-black mt-6 opacity-80'>+91 98765 43210 - userinfo@gmail.com</p>
        </div>

        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Information</h1>
            <p className='footer_link'>About us</p>
            <p className='footer_link'>Privacy Police</p>
            <p className='footer_link'>Return Policy</p>
            <p className='footer_link'>Shipping Policy</p>
            <p className='footer_link'>DropShipping</p>
        </div>

        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Account</h1>
            <p className='footer_link'>Dashboard</p>
            <p className='footer_link'>My Orders</p>
            <p className='footer_link'>Account Details</p>
            <p className='footer_link'>Track Orders</p>
        </div>

        <div className='lg:mx-auto'>
            <h1 className='footer_title'>Shop</h1>
            <p className='footer_link'>Affiliate</p>
            <p className='footer_link'>Best sellers</p>
            <p className='footer_link'>Latest Products</p>
            <p className='footer_link'>Sale Products</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
        <p className='text-sm text-black opacity-60'>© copyright JB IT solution 2024</p>
        <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto'/>
      </div>
    </div>
  )
}

export default Footer
