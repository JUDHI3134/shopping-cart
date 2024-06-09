"use client"

import { Button } from "@/components/ui/button"
import { CartItem, addItem, removeItem } from "@/store/cartSlice"
import { Rootstate } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {

    const dispatch = useDispatch();

    //get our cart items
    const items = useSelector((state:Rootstate) => state.cart.items)
    //calculate total Quantity
  const totalQuantity = items.reduce((total,item) => total+item.quantity, 0)
  //calculate the total price
  const totalPrice = items.reduce((total,item) => total + item.price*item.quantity, 0).toFixed(2)

  //calculate VAT 15%
  const vat = (+totalPrice * 0.15).toFixed(2)
  //total price with VAT
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2)

  //get Authenticate user
  const {user} = useUser();

  //add item
  const addItemHandler = (item: CartItem) => {
     dispatch(addItem(item))
  }
  //remove item
  const removeItemHandler = (id: number) => {
     dispatch(removeItem({id}))
  }
  

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* check if the cart is empty  */}
      {items.length == 0 && (
        <div className="flex items-center w-full flex-col justify-center h-[80vh]">
           <Image src={"/images/cart.svg"} alt="empty_cart" width={400} height={400} className="object-cover mx-auto" />
           <h1 className="mt-8 font-semibold text-2xl">Your Cart is Empty</h1>
           <Link href={"/"}>
           <Button className="mt-4">Shop Now</Button>
           </Link>
        </div>
      )}

      {/* if cart item exist */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] grid grid-cols-1 mx-auto xl:grid-cols-6 gap-12">
           {/* cart item  */}
           <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">Your Cart ({totalQuantity} Items)</h1>
            {items.map((item) =>{
                return <div key={item.id}>
                   <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                     <div>
                        <Image src={item.image} alt={item.title} width={180} height={180}/>
                     </div>
                     <div>
                        <h1 className="md:text-xl text-base font-bold text-black">{item.title}</h1>
                        <h1 className="md:text-lg text-sm font-semibold">Category : {item.category}</h1>
                        <h1 className="md:text-lg text-sm font-semibold">Quantity : {item.quantity}</h1>
                        <h1 className="md:text-2xl text-lg font-bold text-blue-950">${item.price}</h1>
                        <div className="flex items-center space-x-2 mt-4">
                            <Button onClick={()=>{addItemHandler(item)}}>Add More</Button>
                            <Button onClick={()=>{removeItemHandler(item.id)}} variant={"destructive"}>Remove</Button>
                        </div>
                     </div>
                   </div>
                </div>
            })}
           </div>
           {/* cart summary */}
           <div className="xl:col-span-2">
            <div className="bg-indigo-900 sticky top-[25vh] p-6 rounded-lg">
                <h1 className="mt-8 mb-8 text-center text-white text-3xl font-semibold">Summary</h1>
                <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
                <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                    <span>vat</span>
                    <span>${vat}</span>
                </div>
                <div className="flex mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
                <div className="flex mt-6 mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                    <span>Total</span>
                    <span>${totalPriceWithVat}</span>
                </div>
                {!user && (
                    <Link href={"/sign-in"}>
                        <Button className="bg-orange-500 w-full">Sign in to Checkout</Button>
                    </Link>
                )}

                {user && (
                    <Button className="bg-orange-500 w-full">Paypal</Button>
                )}
            </div>
           </div>
        </div>
      )}
    </div>
  )
}

export default Cart
