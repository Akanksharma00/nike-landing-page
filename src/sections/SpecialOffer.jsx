import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section id='specialOffer' className='flex justify-center items-center flex-wrap max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>

      <div className='flex flex-1 flex-col justify-start gap-6 lg:max-w-lg'>
        <h1 className='font-palanquin text-4xl font-bold'> <span className='text-coral-red'>Special</span> Offer</h1>
        <p className='info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparallel value that sets us apart.</p>
        <p className='info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-wrap  gap-4'>
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer