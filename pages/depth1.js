import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
  {id:1, title:'family conflicts', src:'/assets/images/a.jpg'},
  {id:2, title:'Bullying', src:'/assets/images/b.jpg'},
  {id:3, title:'Academic Pressure', src:'/assets/images/c.jpg'},
  {id:4, title:'Body Shape', src:'/assets/images/d.jpg'},
  {id:5, title:'Relationship', src:'/assets/images/e.jpg'},
  {id:6, title:'Loneliness', src:'/assets/images/f.jpg'},
  {id:7, title:'Sucidal Thoughts', src:'/assets/images/g.jpg'},
  {id:8, title:'Character Value', src:'/assets/images/h.jpg'},
  {id:9, title:'Trolling', src:'/assets/images/i.jpg'},
];

const depth1 = () => {
  return (
    <div className='w-full bg-white'>
      <Navbar/>
      <div className='flex flex-col bg-white text-center w-full h-auto'>
        <div className='text-black font-semibold text-2xl font-mono mt-36 mb-5 mr-60'>
          Choose the
        </div>
        <div className='text-black font-prompt font-black text-6xl mb-5'>
          &quot;Depth&quot;
        </div>
        <div className='text-black font-semibold text-2xl font-mono mb-5 ml-60 '>
          of your state
        </div>
      </div>
      <div className='w-full h-full flex flex-col'>
        {cardData.map((card)=>(
          <div key={card.id} className='relative ml-16 mb-44 mt-5'>
            
            <Link href={{
              pathname:"/Checkout",
              query:{title:card.title, src:card.src, width:card.width, height:card.height},
            }}>
            <div >
            <Image src={card.src} alt={card.title} width={130} height={130} className='rounded-3xl border-black p-1 bg-white border-4 mt-10 absolute z-10'/>  
            </div>  
            <div className='absolute w-96 h-24 mx-12 top-14 container z-0 bg-block rounded-3xl'>
              <div className='text-black font-black font-prompt text-start mx-0 px-24 py-9'>
                {card.title}
              </div>
              </div>    
                   
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default depth1