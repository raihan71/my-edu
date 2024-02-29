import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
  <footer className="w-full rounded-lg px-8 shadow">
      <div className="flex justify-center mx-auto p-4">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">© {date.getFullYear()} <a href="https://raihan.my.id" className="hover:underline" target='_new'>Raihan Nismara</a>. All Rights Reserved.
          </span>
      </div>
  </footer>
  )
}

export default Footer