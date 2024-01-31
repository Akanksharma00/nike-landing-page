import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='max-container flex flex-row max-lg:flex-col justify-between items-center w-full gap-10'>
      <div className='flex flex-1 flex-col justify-start gap-6 lg:max-w-lg'>
        <h1 className='font-palanquin text-4xl font-bold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='info-text'>Ensuring premium comfort and styles, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='info-text'>Our dedication to detail and excellence ensures your satisfaction.</p>
        <div>
          <Button label="View details" />
        </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='shoe8' width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality