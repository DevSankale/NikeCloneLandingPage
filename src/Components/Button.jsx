import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 bg-red-500 text-lg leading-none     
    ${backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : 'bg-red-400 text-white border-coral-red'} rounded-full ${fullwidth && 'w-full'}`}>
      {label}
{iconURL && <img src={iconURL} alt='arrowright' className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button;
