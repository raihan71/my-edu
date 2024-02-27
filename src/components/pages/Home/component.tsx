import React from 'react'
import images from '@/configs/images'
import Image from 'next/image'

const Education = () => {
  return (
    <section className="rounded-lg bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-8 px-10 mx-auto">
        {[1,2,3,4].map((i) => (
        <a href="#" key={i} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-1">
            <div className="bg-gray-200 rounded-t-lg px-2 md:rounded-none md:rounded-s-lg md:w-52 overflow-hidden">
                <Image className="object-contain object-center w-full h-48 md:max-h-min" src={images.education} alt="education-image" height="100" width="100" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Sciene @ Showwcase</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
        ))}
      </div>
    </section>
  )
}

export default Education