'use client'
import Image from 'next/image'
import logo from '../../public/logo.png'
import search from '../../public/search.png'
import cart from '../../public/cart.png'
import add from '../../public/add.png'
import laptop1 from '../../public/laptop1.png'
import w1 from '../../public/w1.png'
import w2 from '../../public/w2.png'
import w3 from '../../public/w3.png'
import close from '../../public/close.png'
import menu from '../../public/menu.png'
import facebook from '../../public/facebook.png'
import youtube from '../../public/youtube.png'
import linkedin from '../../public/linkedin.png'
import { useState } from 'react'
import { link } from 'fs'
import Link from 'next/link'
export default function Home() {

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
  };

  const [collapse, setCollapse] = useState<boolean>(false)

  return (
    <div className=' w-full mx-auto'>
      <nav className='h-14 bg-white flex justify-between'>
        <div className=' flex justify-center items-center md:-order-3'>

          <div className=' ml-4 md:hidden flex items-center'>
            <button onClick={() => setCollapse(true)}><Image src={menu} alt='menu' width={30} height={30} className=' cursor-pointer' /></button>

          </div>

          <div className=' md:hidden'><Image src={search} alt='search' width={20} height={20} className=' rotate-90 ml-4' /></div>
        </div>

        <div className=' flex items-center  md:-order-4 md:ml-4'>
          <div><Image src={logo} alt='logo' width={120} height={120} className=' ml-8' /></div>

          <div className={` bg-[#f2f2f2] h-1/2 w-full  mt-14 text-sm absolute ${collapse ? "" : "ms-[-100%]"} md:mb-20 md:static md:w-auto md:bg-transparent inset-0 md:flex md:mx-4 md:space-x-3  md:translate-x-0 transition-all ease-in-out duration-500`}>
            <button className=' cursor-pointer my-4 ml-5 md:hidden' onClick={() => setCollapse(false)}><Image src={close} alt='close' width={15} height={15} /></button>
            <div className=' hover:border border-black hover:py-2 hover:px-1 hover:w-[90%] md:hover:py-0 md:hover:w-auto md:hover:px-0 md:border-none md:hover:underline md:hover:underline-offset-8 cursor-pointer my-4 ml-5 '>Microsoft 365</div>
            <div className=' hover:border border-black hover:py-2 hover:px-1 hover:w-[90%] md:hover:py-0 md:hover:w-auto md:hover:px-0 md:border-none md:hover:underline md:hover:underline-offset-8 cursor-pointer my-4 ml-5'>Office</div>
            <div className=' hover:border border-black hover:py-2 hover:px-1 hover:w-[90%] md:hover:py-0 md:hover:w-auto md:hover:px-0 md:border-nonemd:hover:underline md:hover:underline-offset-8 cursor-pointer my-4 ml-5' >Copilot</div>
            <div className=' hover:border border-black hover:py-2 hover:px-1 hover:w-[90%] md:hover:py-0 md:hover:w-auto md:hover:px-0 md:border-nonemd:hover:underline md:hover:underline-offset-8 cursor-pointer my-4 ml-5'>Windows</div>
            <div className=' hover:border border-black hover:py-2 hover:px-1 hover:w-[90%] md:hover:py-0 md:hover:w-auto md:hover:px-0 md:border-nonemd:hover:underline md:hover:underline-offset-8 cursor-pointer my-4 ml-5'>Support</div>


          </div>

        </div>

        <div className='flex items-center mr-4'>
          <div className=' text-sm invisible md:visible md:-order-3 md:mr-4 md:hover:underline md:hover:underline-offset-8 cursor-pointer'>All Microsoft</div>
          <div className=' invisible md:visible md:rotate-90 md:-order-2 md:mr-5'><Image src={search} alt='search' width={20} height={20} /></div>
          <div className=' md:-order-1'><Image src={cart} alt='cart' width={20} height={20} className=' mr-6 ' /></div>
          <div className=' md:-order-0 lg:hidden' ><Image src={add} alt='cart' width={32} height={32} /></div>
        </div>

      </nav>

      <div className=' flex flex-col-reverse md:flex-row bg-[#f2f2f2]'>
        <div className=' py-12 flex flex-col justify-center items-center md:items-baseline  md:ml-6 lg:ml-14'>
          <h1 className=' text-2xl font-medium md:text-4xl mx-5'>Surface Laptop</h1>
          <p className=' w-3/4 mx-5 text-center md:text-left md:mt-3'>Do it all with a perfect balance of sleek, ultra-thin design,</p>
          <button className=' text-white bg-black px-4 py-2 my-6 font-bold mx-5 hover:bg-[#f2f2f2] hover:text-black hover: border border-black hover:duration-200 hover:ease-in-out'>Shop Now </button>
        </div>

        <div>
          <Image src={laptop1} alt='laptop' className=' md:w-[62rem]' />
        </div>
      </div>

      <div className=' space-y-6 flex flex-col lg:flex-row lg:justify-center lg:items-baseline lg:space-x-10  '>
        <div className=' flex items-center space-x-2 lg:mt-6 lg:flex-col'>
          <Image src={w1} alt='w1' width={120} height={120} className=' lg:w-[200px]' />
          <span className=' font-medium lg:w-[8rem] lg:text-center text-sm'>Choose Your Microsoft 365</span>
        </div>

        <div className=' flex items-center  space-x-2 lg:flex-col'>
          <Image src={w2} alt='w1' width={80} height={80} className='ml-5 lg:w-[100px] ' />
          <span className='  font-medium lg:w-[8rem] lg:text-center text-sm'>Explore Surface devices</span>
        </div>

        <div className=' flex items-center  space-x-2 lg:flex-col'>
          <Image src={w3} alt='w1' width={80} height={80} className='  ml-5 lg:w-[100px] ' />
          <span className='  font-medium lg:w-[8rem] lg:text-center text-sm'>Buy Xbox games</span>
        </div>

        <div className=' flex items-center space-x-2 lg:flex-col'>
          <Image src={w1} alt='w1' width={120} height={120} className=' lg:w-[200px]' />
          <span className='  font-medium lg:w-[8rem] lg:text-center text-sm'>Get Windows 11</span>
        </div>

      </div>

      <div className=' bg-[#f2f2f2] md:mt-5 md:flex flex-row md:py-10 lg:mt-14 lg:py-14'>

        <div className=' text-center md:w-8/12 md:text-left lg:w-1/2  '>


          <div className=' pt-5 px-5 md:ml-10'>
            <h1 className=' pb-2 font-bold'>OUR BEST RECIPES</h1>
            Upholding the true French pastry- making tradition, Collection is a range of refined cakes using only the highest quality, freshest ingredients from select regions of France.
          </div>
        </div>

        <div className=' flex justify-center gap-x-5 mt-5 pb-5 md:flex items-center md:ml-10 lg:ml-48'>
          <div>
            <div><Image src={facebook} alt='facebook' width={40} height={40} className=' cursor-pointer' onClick={() => openWebsite('https://www.facebook.com/')} /></div>
          </div>

          <div>
            <div><Image src={linkedin} alt='' width={40} height={40} className=' cursor-pointer' onClick={() => openWebsite('https://www.linkedin.com/')} /></div>
          </div>

          <div>
            <div><Image src={youtube} alt='' width={40} height={40} className=' cursor-pointer' onClick={() => openWebsite('https://www.youtube.com/')} /></div>
          </div>
        </div>

      </div>

    </div>
  )
}
