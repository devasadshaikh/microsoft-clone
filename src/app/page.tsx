import Image from 'next/image'
import logo from '../../public/logo.png'
import search from '../../public/search.png'
import cart from '../../public/cart.png'
import add from '../../public/add.png'
import laptop from '../../public/laptop.png'
import w1 from '../../public/w1.png'
import w2 from '../../public/w2.png'
import w3 from '../../public/w3.png'
export default function Home() {
  return (
    <div className=' w-full mx-auto'>
      <nav className='h-14 bg-white flex justify-between'>
        <div className=' flex justify-center items-center md:-order-3'>

          <div className=' ml-4 md:hidden'>
            <div className='w-6 h-0.5 bg-black my-1'></div>
            <div className='w-6 h-0.5 bg-black my-1'></div>
            <div className='w-6 h-0.5 bg-black my-1'></div>
          </div>

          <div className=' md:hidden'><Image src={search} alt='search' width={20} height={20} className=' rotate-90 ml-4' /></div>
        </div>

        <div className=' flex items-center  md:-order-4 md:ml-4'>
          <div><Image src={logo} alt='logo' width={120} height={120} className=' ml-8' /></div>

          <div className=' text-sm absolute w-fit md:static md:w-auto bg-transparent md:bg-transparent inset-0 md:flex md:mx-4 md:space-x-3 -translate-x-96 md:translate-x-0'>
            <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>Microsoft 365</div>
            <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>Office</div>
            <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>Copilot</div>
            <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>Windows</div>
            <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>Support</div>
          </div>

        </div>

        <div className='flex items-center mr-4'>
          <div className=' text-sm invisible md:visible md:-order-3 md:mr-4'>All Microsoft</div>
          <div className=' invisible md:visible md:rotate-90 md:-order-2 md:mr-5'><Image src={search} alt='search' width={20} height={20} /></div>
          <div className=' md:-order-1'><Image src={cart} alt='cart' width={20} height={20} className=' mr-6 ' /></div>
          <div className=' md:-order-0 lg:hidden' ><Image src={add} alt='cart' width={32} height={32} /></div>
        </div>

      </nav>

      <div className=' flex flex-col-reverse md:flex-row bg-[#f2f2f2]'>
        <div className=' py-12 flex flex-col justify-center items-center md:items-baseline  md:ml-6 lg:ml-14'>
          <h1 className=' text-2xl font-medium md:text-4xl mx-5'>Surface Laptop</h1>
          <p className=' w-3/4 mx-5 text-center md:text-left md:mt-3'>Do it all with a perfect balance of sleek, ultra-thin design,</p>
          <button className=' text-white bg-black px-4 py-2 my-6 font-bold mx-5'>Shop Now </button>
        </div>

        <div>
          <Image src={laptop} alt='laptop' className=' md:w-[62rem]' />
        </div>
      </div>

      <div className=' space-y-6 flex flex-col lg:flex-row lg:justify-center lg:items-baseline lg:space-x-10 '>
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

    </div>
  )
}
