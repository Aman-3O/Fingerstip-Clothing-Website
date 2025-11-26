import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>Address line 1 likhna h <br /> or idr Address line 2 likhna h</p>
          <p className=' text-gray-500'>Tel: +91-88391-59873 <br />Tel: +91-93021-81345 <br /> Email: Fingerstip2@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Fingerstip</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Jobs wala button</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
