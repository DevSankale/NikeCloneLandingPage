import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1  sm:w-[150px] sm:min-w-[50px] w-full rounded-[20px] bg-red-200 px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-red-400 rounded-full'>
      <img src={imgURL}
           alt={label}
           width={24}
           height={24}
      />
      </div>
      <h3 className='mt-5 leading-normal font-bold'>{label}</h3>
      <p className='mt-3 break-words text-lg leading-normal text-gray-400'>{subtext}</p>
    </div>
  )
}
  
export default ServiceCard
