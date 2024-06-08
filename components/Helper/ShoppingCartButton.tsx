"use client"
import { Rootstate } from '@/store/store';
import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux';

const ShoppingCartButton = () => {

  const items = useSelector((state:Rootstate) => state.cart.items)
  const totalQuantity = items.reduce((total,item) => total+item.quantity, 0)
  return (
    <div className='relative'>
      <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex justify-center items-center flex-col text-xs text-white rounded-full'>{totalQuantity}</span>
      <ShoppingBagIcon size={26} cursor={"pointer"} />
    </div>
  )
}

export default ShoppingCartButton
