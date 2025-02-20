import React from 'react'

const Shoecard = ({ imgURL, bigShoe, changeBigShoeImage }) => {

  const handleClick = () => {
    if (bigShoe !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  return (
    <div 
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
        ${bigShoe === imgURL.bigShoe ? 'border-red-400' : 'border-transparent hover:border-gray-300'}
      `}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-gray-300'>
        <img src={imgURL.thumbnail}
          alt="shoe collection"
          width={100}
          height={90}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default Shoecard
