"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast';
import { CartItem, addItem } from '@/store/cartSlice';
import { Product } from '@/typing';
import React from 'react'
import { useDispatch } from 'react-redux';

const AddToCart = ({product}:{product: Product}) => {
  const dispatch = useDispatch();
  const {toast} = useToast()

  const addCartHandler = () =>{
    
    toast({
      description :"Item Added To Cart",
      variant: "success"
    })
    dispatch(addItem(product))
  }
  return (
    <div>
      <Button onClick={()=>{addCartHandler()}} className='mt-6'>Add To Cart</Button>
    </div>
  )
}

export default AddToCart
