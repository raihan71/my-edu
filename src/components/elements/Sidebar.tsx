'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import '@/styles/bootstrap-icons.min.css';
import { removeAuthName } from '@/utils/auth';

const Sidebar = () => {
  const router = useRouter();
  const currentRoute = usePathname();
  const [hideBar, setHideBar] = useState(false);

  const handleExit = () => {
    removeAuthName();
    router.push('/');
  };

  const handleHideSidebar = () => setHideBar(hideBar => !hideBar);

  return (
    <>
      <button
        onClick={handleHideSidebar}
        className="absolute text-white text-4xl top-5 left-5 cursor-pointer shadow-lg shadow-indigo-500/50"
      >
        <span className="sr-only">menu</span>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </button>
      <aside
        className={`${hideBar ? 'hidden ' : 'md:relative'}sidebar fixed inset-0 overflow-hidden z-50 top-0 bottom-0 lg:left-0 p-2 w-full md:w-[300px] overflow-y-auto text-center bg-gray-900`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-indigo-600"></i>
            <h1 className=" text-gray-200 text-base ml-3">Showwcase Education</h1>
            <button onClick={handleHideSidebar}>
              <span className="sr-only">close</span>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
              ></i>
            </button>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <Link className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-600 text-white ${currentRoute === '/home' ? 'bg-indigo-600' : ''}`} href="/home">
          <i className="bi bi-mortarboard-fill"></i>
          <span className="text-base ml-4 text-gray-200 ">Showwcase University</span>
        </Link>
        <Link className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-600 text-white ${currentRoute === '/bootcamp' ? 'bg-indigo-600' : ''}`} href="/bootcamp">
          <i className="bi bi-people-fill"></i>
          <span className="text-base ml-4 text-gray-200 ">Forward Bootcamp</span>
        </Link>
        <a onClick={handleExit} className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-600 text-white ${currentRoute === '/bootcamp' ? 'bg-indigo-600' : ''}`}>
          <i className="bi bi-box-arrow-right"></i>
          <span className="text-base ml-4 text-gray-200 ">Exit</span>
        </a>
      </aside>
    </>
  )
}

export default Sidebar