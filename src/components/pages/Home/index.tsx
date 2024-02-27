import React from 'react'
import Image from 'next/image'
import Sidebar from '@/components/elements/Sidebar'
import images from '@/configs/images'
import Education from './component'
import Modal from '@/components/elements/Modal'

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 md:ml-[300px] p-4">
        <section className="rounded-lg bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-20">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Raihan's education page.</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque alias officia eum facilis doloribus architecto ipsum voluptatem dolorem temporibus! Eligendi ipsa velit porro ratione? Dolores quam voluptatibus id nihil vero?</p>
                    <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mb-2">Add New Education</button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image className="w-full rounded-lg bg-red-50" src={images.success} alt="success-illustration" priority={true} width={200} height={200} />
                    <Image className="mt-4 w-full lg:mt-10 rounded-lg" src={images.resume} alt="resume-illustration" width={200} height={200} />
                </div>
            </div>
        </section>
        <div className="h-8"></div>
        <Education />
        <Modal />
      </div>
    </>
  )
}
