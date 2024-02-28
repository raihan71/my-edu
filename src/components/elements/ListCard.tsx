'use client';
import React from 'react';
import Image from 'next/image';
import { transformDate } from '@/utils/text';

const List = (props: {
  onDelete: any,
  imgUrl: string,
  title: string,
  data: any
}) => {
  const { data, imgUrl, title, onDelete} = props;
  return (
    <a className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-1">
        <div className="bg-gray-200 rounded-t-lg px-2 md:rounded-none md:rounded-s-lg md:w-28 overflow-hidden">
            <Image className="object-contain object-center w-full h-48 md:max-h-min" src={imgUrl} alt="education-image" height="100" width="100" />
        </div>
        <button onClick={onDelete}>
          <span className="sr-only">delete</span>
          <i
            className="bi bi-x cursor-pointer absolute top-2 right-2 text-gray-600 dark:text-gray-400"
          ></i>
        </button>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h6 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{data?.degree} @ {data?.schoolName}</h6>
            <h6 className="mb-1 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{data?.fieldStudy}</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {transformDate(data?.startYear)} - {transformDate(data?.endYear)}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Grade : {data?.grade}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data?.description}
            </p>
        </div>
    </a>
  )
}

export default List