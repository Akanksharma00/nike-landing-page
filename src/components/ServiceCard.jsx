import React from 'react';

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='px-10 py-16 flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl'>
        <div className='flex justify-center items-center w-11 h-11 bg-coral-red rounded-full'>
            <img src={imgURL} alt='service logo' width={24} height={24}/>
        </div>
        <h3 className='mt-5 font-palanquin text-black font-bold text-3xl leading-normal'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard