import React from 'react'
import {footerLogo} from '../assets/images'
import {socialMedia} from '../constants/index.js'
import { footerLinks } from '../constants/index.js'

const Footer = () => {
  return (
    <footer className='max-container bg-black p-[50px]'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
           <img src={footerLogo}
                width={150}
                height={46}       
           />
          </a>
          <p className='mt-6  leading-7 text-white sm:max-w-sm text-base text-start'>Get shoes ready for the new term at your nearest  Nike store. Find your perfect size in store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8 cursor-pointer'>

            {socialMedia.map((icon)=>{
              return(
                <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                  <img
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                  />
                </div>
              )
            })}

          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section)=>{
            return(
              <div key={section}>
                <h4 className='text-white text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                <ul>
                  {section.links.map((link)=>{
                    return(
                      <li className='text-white text-base leading-7 mt-1 hover:text-gray-400 cursor-pointer'
                      key={link.name}
                      >
                       <a>{link.name}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
          
        </div>
      </div>
      <div className='flex justify between text-white mt-24 max-sm:flex-col max-sm:items-center'>                      
           <p className='text-white-400 text-base leading-normal text-center mt-16'>&copy;2021 Nike, Inc. All Rights Reserved.
            </p> 
      </div>
    </footer>
  )
}

export default Footer
