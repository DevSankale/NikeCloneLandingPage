import { useState } from 'react'
import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { bigShoe2 } from '../assets/images'
import { statistics } from '../constants'
import { shoes } from '../constants'
import Shoecard from '../Components/Shoecard'


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe2)

  return (
    <section id='home' className='flex flex-col w-full justify-center lg:flex-row gap-10 min-h-screen max-w-[1440px] mx-auto pt-12'>
      

      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full pt-28">
        <p className='text-xl text-red-500'>Our Summer Collection</p>
        <h1 className='text-8xl max-sm:text-[70px] max-sm:leading-[82px] font-bold max-sm:text-start'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrivals.
          </span>
        </h1>
        <h1 className='text-8xl max-sm:text-[70px] max-sm:leading-[82px] font-bold max-sm:text-start'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-red-500'>
            Nike
          </span>
          Shoes.
        </h1>
        <p className='text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm text-start'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop Now." iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stats, index) => {
            return (
              <div key={index}>
                <p className='font-bold text-4xl'>{stats.value}</p>
                <p className='text-gray-400'>{stats.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-center bg-cover bg-red-50'>
        <img src={bigShoeImg}
          alt='shoe collection'
          width={600}
          height={500}
          className='object-contain relative z-10'
        />

        
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[15%] right-[3%]'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <Shoecard 
                imgURL={shoe}
                changeBigShoeImage={(newShoe) => setBigShoeImg(newShoe)}
                bigShoe={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
