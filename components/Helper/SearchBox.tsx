import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import {SearchIcon } from 'lucide-react'

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"Pointer"}/>
      </DialogTrigger>
      <DialogContent>
        <form>
            <input type="text" placeholder="search product" className='block bg-gray-300 w-full rounded-lg px-6 py-2 mt-4 outline-none' />
        </form>
      </DialogContent>
       
    </Dialog>
  )
}

export default SearchBox
