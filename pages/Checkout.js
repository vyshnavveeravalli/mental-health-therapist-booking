import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import checkoutimage from '@/public/assets/images/ckout.png';
import { useRouter } from 'next/router';
import dotline from '@/public/assets/images/Vector9.jpg'


const Checkout = () => {
    const router = useRouter();
    const { title, src} = router.query;
  return (
    <div className=' w-full h-screen bg-white'>
        <Navbar/>
        <div>
            <div className='flex flex-col bg-white p-16 py-32 bottom-44'>
                <div className='flex flex-row container bg-block w-90 h-32 rounded-3xl z-0'>
                    <Image src={src} alt={title} width={105} height={130} className=' border-black border-2 rounded-2xl m-4'/>
                    <div className='flex p-12 text-black'>{title}</div>
                </div>
                <div className='absolute bg-contain bg-no-repeat bg-center flex px-28 py-16 z-10'>
                    <Image src={checkoutimage} alt='checkingout'/>
                </div>
                <div className='absolute w-auto left-10 bottom-80 z-0 py-0'>
                    <Image src={dotline} alt='dotsdivider'/>
                </div>
                <div className='flex flex-row z-20'>
                    <div>
                        <div className='flex flex-row container bg-block w-72 h-20 mt-10 rounded-3xl backdrop-filter backdrop-blur-md bg-opacity-30'>
                            <div className='absolute flex p-4 px-8 py-7 text-black'>
                                Location
                            </div>
                            <div className=' flex items-center justify-center p-3 px-44 '>
                                <div className='flex items-center justify-center text-black w-24 h-14 border-black border-2 rounded-2xl '>
                                Home
                                </div>                            
                            </div>                            
                        </div>
                        <div className='flex flex-row container bg-block w-72 h-20 mt-8 rounded-3xl backdrop-filter backdrop-blur-md bg-opacity-30'>
                            <div className='absolute flex p-4 px-8 py-7 text-black'>
                                Schedule
                            </div>
                            <div className='flex items-center justify-center p-3 px-44 '>
                            <div className='flex items-center justify-center w-24 h-14 border-black border-2 rounded-2xl text-black'>            
                            ASAP                            
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row container bg-block h-48 mt-10 ml-10 rounded-3xl backdrop-filter backdrop-blur-md bg-opacity-30 border-opacity-5'>
                        <div className=' flex items-center justify-center p-6 py-36 px-4 '>
                            <div className='flex items-center justify-center w-24 h-14 border-black border-2 rounded-2xl text-black'>
                            SET
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col mb-9'>
                <div className='flex flex-row justify-between mb-4 px-16'>
                    <div className=' font-black text-xl text-gray-500'>
                        Appointment Fee
                    </div>
                    <div className=' font-black text-xl text-gray-500'>
                        250
                    </div>
                </div>
                <div className='flex flex-row justify-between mb-4 px-16'>
                    <div className=' font-black text-xl text-gray-500'>
                        Charges
                    </div>
                    <div className=' font-black text-xl text-gray-500  '>
                        0
                    </div>
                </div>
                <div className='flex flex-row justify-between mb-5 px-16'>
                    <div className=' font-black text-xl text-gray-500'>
                        Taxes
                    </div>
                    <div className=' font-black text-xl text-gray-500 '>
                        5.06 
                    </div>
                </div>
                <div className='flex flex-row justify-between px-16'>
                    <div className=' font-black text-2xl text-black'>
                        Total
                    </div>
                    <div className=' font-black text-2xl text-black '>
                        255.06 
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row fixed justify-between shadow-sm bg-white w-full h-24 px-12'>
            <div className='flex border-black border-4 text-2xl font-black justify-center jus rounded-3xl h-16 w-36 p-3 mt-3 text-black'>
                COD
            </div>
            <div className='flex border-black border-4 text-2xl font-bold justify-center jus rounded-3xl h-16 w-44 p-3 mt-3 text-black'>
                Pay Securly
            </div>
        </div>
    </div>
  )
}
export default Checkout