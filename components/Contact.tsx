import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailchimp, FaPhone } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import Link from 'next/link'

const Contact = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-blue-700 pt-20 gap-4 pb-15 sm:gap-0 ">
            <div className="px-10 ">
                <h1 className='text-white text-3xl sm:text-[50px] font-bold mb-10'>Get in Touch</h1>
                <p className='text-white text-[15px] sm:text-[20px] font-bold mb-5'>We'd love to hear from you!</p>
                <p className='text-white text-[14px] sm:text-[18px] mb-6'>Whether you have a specific vision or just want to explore ideas, we’re here to bring your dream event to life. Reach out today!</p>
                
                <div className="flex items-center gap-2 pt-3">
                    <p><FaPhone size={20} className='bg-white text-blue-700 p-1 rounded-full rotate-90'/></p>
                    <p className='text-white text-[12px] sm:text-[15px]'>+2349030031328</p>
                </div>
                <div className="flex items-center gap-2 pt-3">
                    <p><FaMailchimp size={20} className='bg-white text-blue-700 p-1 rounded-full rotate-90'/></p>
                    <p className='text-white text-[12px] sm:text-[15px]'>adegbesanoluwakayode52@gmail.com</p>
                </div>

                <div className="flex items-center gap-2 ">
                    <Link href="https://instagram.com/baba_jehjeh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} className='bg-white text-red-700 p-1 rounded-full '/></Link>
                    <Link href="https://facebook.com/oluwamayowaakinkunmi" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={20} className='bg-white text-blue-500 p-1 rounded-full '/></Link>
                    <Link href="https://linkedin.com/in/adegbesan-oluwakayode" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} className='bg-white text-blue-600 p-1 rounded-full '/></Link>
                    <Link href="https://x.com/MrKunmi0903003" target="_blank" rel="noopener noreferrer" aria-label="X"><FaX size={20} className='bg-white text-black p-1 rounded-full '/></Link>
                </div>
            </div>
            <div className="px-10 sm:mt-0 mt-10">
                <h1 className='text-white text-3xl sm:text-[40px] font-bold mb-4'>Let’s Create Something Unforgettable.</h1>
                <p className='text-white text-[14px] sm:text-[30px] font-bold'>Ready to make your event spectacular? Let’s get started!</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
