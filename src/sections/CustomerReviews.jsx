import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className='max-container mt-[200px]'>
      <h3 className='text-center text-4xl font-bold'>
        What Our <span className='text-red-400'>Customers </span>
        Say?
      </h3>
      <p className='m-auto text-gray-400 mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
<div className="mt-10 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">

  {
    reviews.map((review)=>{
      return (
        <ReviewCard 
        key={review.customerName}
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}

        />
      )
    })
  }

</div>
    </section>
  )
}

export default CustomerReviews
