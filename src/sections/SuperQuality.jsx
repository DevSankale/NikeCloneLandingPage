import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' 
    className='12 mt-[150px] pt-[80px] flex justify-between items-center max-lg:flex-col gap-10 w-full max-container max-sm:mt-[50px] mb-[150px]'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl capitalized  font-bold text-start lg:max-w-lg max-sm:text-center'>We Provide You <span className='text-start xl:bg-white xl:whitespace-nowrap relative z-10 text-red-500'>
            Super Quality
          </span> Shoes.
        </h2>
        <p className='text-lg leading-7 text-gray-400 mt-4 text-start lg:max-w-lg max-sm:text-center'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality,innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg-max-w-lg text-start text-gray-400 max-sm:text-center'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-10 max-sm:flex justify-center'>
            <Button label="View Details." />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
          <img src={shoe8}
           alt='shoe8'
           width={570}
           height={522}
           className='object-contain'
          />
      </div>
    </section>
  )
}

export default SuperQuality
