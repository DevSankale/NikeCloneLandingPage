import React from 'react'
import { products } from '../constants' 
import { star } from '../assets/icons'

const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-[100px] mt-[200px] pt-[100px]'>
      <div className='flex flex-col lg:items-start items-center text-center lg:text-left gap-3 mb-10'>
         <h2 className='text-4xl font-bold'>Our <span className='text-red-500'>Popular</span> Products.</h2>
         <p className='text-gray-400'>
            Experience top notch quality and styles with our sought-after selections. Discover a world of comfort, design, and value.
         </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-14'>
        {products.map((product, index) => {
          return (
            <div key={index} className='border p-4 rounded-lg bg-white shadow-md w-48 flex flex-col items-center'>
              <img src={product.imgURL} alt={product.name} className="object-contain w-full h-32"/>
              <img src={star} alt='rating' width={10} height={20} className='pt-2'/> 
              <p className='text-sm leading-normal text-gray-400'>{4.5}</p>
              <p className='mt-2 font-semibold text-center'>{product.name}</p>
              <p className='text-red-500'>{product.price}</p>
              <div className='flex items-center gap-1 mt-2'>
               
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PopularProducts
