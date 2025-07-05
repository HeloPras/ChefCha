import React from "react";
import {
    FaYoutube,
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaPinterest
  } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-gray-200 h-[25em] mt-10 border border-gray-300 flex'>
        <div className='max-w-[px] flex items-center justify-between mt-10  mx-5'>
            <div className=' h-[25em] w-[30em] mx-28 flex flex-col  items-center object-cover gap-7'>
                <img src= '/Logo.png' className='w-50 object-cover mt-5' alt="" />
                <button className='bg-white px-20 border border-[#fc8019] hover:text-white hover:bg-[#fc8019]  hover:border-b-amber-600 duration-600 ease-in-out  cursor-pointer py-2 font-bold mt-[-20px]'> News Letter</button>

                <p className='my-5'>Follow us</p>
                <div className='flex gap-5'>
                    <FaFacebook  className='cursor-pointer text- hover:text-[#fc8019]' size={20} />
                    <FaInstagram  className='cursor-pointer hover:text-[#fc8019]'size={20} />
                    <FaTiktok  className='cursor-pointer hover:text-[#fc8019]'size={20} />
                    <FaYoutube className='cursor-pointer hover:text-[#fc8019]' size={20} />
                    <FaPinterest  className='cursor-pointer hover:text-[#fc8019]'size={20} />
                </div>
            </div>

         <div className=' h-[25em] w-full flex mx-auto gap-20 '>
                 <ul className='mt-20 w-full'>
                    <h1 className='font-bold text-xl mb-2'>Useful links</h1>
                    <li className='py-2 text-sm font-medium border-b-[3px] border-transparent hover:border-b-[3px] cursor-pointer border-b-amber-600 duration-200 ease-in-out'>About us</li>
                    <li className='py-2 text-sm font-medium hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out' >Events</li>
                    <li className='py-2 text-sm font-medium hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>Blogs</li>
                    <li className='py-2 text-sm font-medium hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>FAQ</li>
                </ul>
                 <ul className='mt-20 w-full'>
                 <h1 className='font-bold text-xl mb-2'>Main Menu</h1>
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>Home</li>
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out' >Offers</li>
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>Menus</li>
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>Reservation</li>
                </ul>
                 <ul className='mt-20 w-full'>
                 <h1 className='font-bold text-xl mb-2'>Contact Us</h1>
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out'>chefcha@gmail.com</li> 
                    <li className='py-2 text-sm font-normal hover:border-b-[3px] cursor-pointer border-b-amber-600 transition-all duration-200 ease-in-out' >+977 9861200900</li>
                </ul>

        </div>


        </div>
        

      
    </div>
  );
};

export default Footer;