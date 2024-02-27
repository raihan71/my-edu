import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'

export default function Welcome() {
    return (
        <div className="text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-medium">Showwedu</h1>
                <a href="https://github.com/gary149/landing-gradients"
                    className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                    Dark Mode
                </a>
            </div>

            <div className="h-32 md:h-40"></div>
            <div className="text-center h-12 overflow-hidden" tabIndex={0}>
                <p className="text-center text-nowrap font-sans text-4xl font-bold text-gray-200">
                    <Typewriter
                        words={['Hi there!', 'Welcome to your education showcase']}
                        loop={0}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <div className="h-8"></div>
            <p className="text-center text-xl text-gray-400">
                Type your name and click "Enter" below to begin!
            </p>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" placeholder="Your Name" id="name" className="block w-1/4 justify-items-center align-middle mx-auto my-3 p-3 border border-gray-500 text-white rounded-lg bg-gray-700 text-base focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500" />
            <div className="flex justify-center align-middle ml-1.5 mt-6">
                <button type="button" className="w-1/5 text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mb-2">Enter</button>
            </div>

            <div className="h-30 md:h-40"></div>


            <footer className="rounded-lg shadow">
                <div className="flex justify-center mx-auto p-2.5">
                    <span className="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>

        </div>
    )
}
