import React from 'react'
import Button from '../Components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'



const SpecialOffer = () => {
  return (
    
    <section className='flex flex-col lg:flex-row justify-normal items-center mt-[200px] gap-10 max-container'>
    <div className="flex-1 pl-10">
        <img src={offer} alt="special" width={773} height={687} className='object-contain'/>
    </div>
    <div> 
    <h2 className='text-4xl capitalized  font-bold text-start lg:max-w-lg max-sm:text-center'><span className='text-start xl:bg-white xl:whitespace-nowrap relative z-10 text-red-500'>
        Special
      </span> Offer.
    </h2>
    <p className='text-lg leading-7 text-gray-400 mt-4 text-start lg:max-w-lg max-sm:text-center'>
      Embark on a shopping journey that redefines your experience with unbeatable deals.From premier selections to incredible savings.We offer unparalleled value that sets us apart. 
    </p>
    <p className='mt-6 lg:max-w-lg text-start text-gray-400 max-sm:text-center'>
      Navigate a realm of possibiities designed to fulfill your unique desires,surpassing the loftiest expectations.Your journey with us is nothing short of expectation.
    </p>
    <div className='mt-10 max-sm:flex justify-center flex flex-wrap gap-4'>
        <Button label="Shop Now."
                iconURL={arrowRight}
        />
        <Button label="Learn More."
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-gray-400"
        />
    </div>
    </div>
  </section> 
  )
}

export default SpecialOffer
