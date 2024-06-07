import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
     <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* text content */}
        <div>
           <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase'> mega sale <span className='text-rose-600'> Special</span>Offer up to <span className='text-orange-500'>60%</span>{" "} Off</h1>
           <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a suscipit eveniet. Quaerat numquam sequi sit voluptatibus rem harum temporibus debitis labore magnam eius? Dolor, nulla accusamus. Delectus, doloribus voluptatibus?</p>
           <div className='flex items-center space-x-4 mt-6'>
             <Button size={"lg"} className='bg-blue-700'>Shop Now</Button>
             <Button size={"lg"}>Explore More</Button>
           </div>
        </div>
        {/* image content */}
        <div className='hidden lg:block'>
          <Image src={"/images/hero.svg"} alt='hero' height={600} width={600} className='lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]'/>
        </div>
    </div> 
    </div>
  )
}

export default Hero
