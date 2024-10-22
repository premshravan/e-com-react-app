import React from 'react'

const OfferBanners = () => {
  return (
    <div className='w-full h-full flex md:flex-row flex-col justify-center items-center gap-4 '>
      <div className='flex-1 relative '>
        <div>
          <img src="./HeroBanners/images/01.jpg" alt="banner" className='w-full h-full' />
        </div>
        <div className='absolute bottom-10 text-black p-3'>
          <h1 className='text-xl font-semibold'>Exclusive Deals:</h1>
          <h1 className='text-xl font-bold'>Sace your Deals Now Only..!!!</h1>
        </div>
      </div>
      <div className='flex-1 relative'>
        <div>
          <img src="./HeroBanners/images/02.jpg" alt="banner" className='w-full h-full' />
        </div>
        <div className='absolute top-1 text-black p-3'>
          <h1 className='text-xl font-semibold'>Superb Deals:</h1>
          <h1 className='text-xl font-bold'>Grab it & Make Yours Now..!!!</h1>
        </div>
      </div>
      <div className='flex-1 relative '>
        <div>
          <img src="./HeroBanners/images/05.jpg" alt="banner" className='w-full h-full' />
        </div>
        <div className='absolute bottom-1 text-black p-3 '>
          <h1 className='text-xl font-semibold '>Best Deals:</h1>
          <h1 className='text-xl font-bold'>Grab Now</h1>
        </div>
      </div>
    </div>
  )
}

export default OfferBanners