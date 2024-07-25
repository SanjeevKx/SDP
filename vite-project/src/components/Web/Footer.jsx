import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full flex flex-row justify-between items-center border-t-2 border-primary p-4 absolute bottom-0 left-0'>
    <div>
      ©️ sanjeev 2024
    </div>
    <div className='flex flex-row gap-4 justify-between items-center'>
      <a href='google.com' target='_blank' >
        <Facebook className='h-6 w-6'/>
      </a>
      <a href='twitter.com' target='_blank'>
        <Twitter className='h-6 w-6'/>
      </a>
      <a href='instagram.com' target='_blank'>
        <Instagram className='h-6 w-6'/>
      </a>
    </div>
  </footer>
  )
}

export default Footer