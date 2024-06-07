import { getAllCategory } from '@/Request/request'
import React from 'react'

const Category = async() => {
    const categories:string[] = await getAllCategory();
  return (
    <div className='pt-16 pb-12'>
      <h1 className='font-bold text-2xl text-center capitalize'>Shop By Category</h1>
      {/* define grid */}
      <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((category)=>{
            return <div key={category} className='p-6 rounded-lg cursor-pointer text-center transition-all duration-300 bg-gray-200 shadow-md hover:scale-110'>
                <h1 className='text-sm sm:text-base lg:text-lg capitalize font-bold'>{category}</h1>
            </div>
        })}
      </div>
    </div>
  )
}

export default Category
