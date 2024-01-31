import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt='show image' width={280} height={280} className='hover:scale-110'/>
        <div className='flex justify-start mt-8 gap-2.5'>
            <img src={star} alt='rating' width={24} height={24}/>
            <p className='text-slate-gray font-montserrat text-xl leading-normal'>(4.5)</p>
        </div>
        <h3 className='mt-2 font-palanquin font-semibold text-xl leading-normal lg:text-2xl'>{name}</h3>
        <p className='mt-1 font-montserrat text-coral-red pt-2 text-xl lg:text-2xl'>{price}</p>
    </div>
  )
}

export default PopularProductCard