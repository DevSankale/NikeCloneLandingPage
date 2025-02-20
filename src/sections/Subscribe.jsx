import React from 'react'
import Button from '../Components/Button'
const Subscribe = () => {
  return (
    <section className='mt-[200px] max-container flex justify-between items-center max-lg:flex-col gap-10 bg-gray-200 pt-[100px] p-[60px] pb-[100px]
    
    
    ' id='contact-us'>
      <h3 className='text-4xl leading-[68px]lg:max-w-md font-bold'>  Sign Up for <span className='text-red-500'>
            Updates </span> & Newsletter.
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5'>
        <input type='text'
                placeholder='subscribe@nike.com'
                className='input'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
              <Button label='Sign Up.'
              fullwidth
              />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
