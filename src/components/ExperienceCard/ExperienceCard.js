import React from 'react'
import './ExperienceCard.scss';


export default function ExperienceCard(props) {
  const { name, position, img, content } = props.item;

  return (
    <div className="ExperienceCard ">
      <div className=" card">
        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
          <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-rose-400">
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
            </svg>
            {content}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-rose-400">
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
            </svg>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-rose-400 dark:text-gray-900">
          <img src={img} alt className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
          <p className="text-xl font-semibold leading-tight">{name}</p>
          <p className="text-sm uppercase">{position}</p>
        </div>
      </div>
    </div>

  )
}
