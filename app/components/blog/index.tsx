import React from 'react'

type Props = {
    intro: string;
    title: string;
    content: string;
}

const Blog = ({intro, title, content}: Props) => {
  return (
    <div className="flex flex-col shadow-md w-72 p-4 m-6 hover:bg-amber-100 hover:scale-105 transition-all duration-150 cursor-pointer">
    <div className="text-lg font-semibold">{intro}</div>
    <div className="text-sm">{content}</div>
    <div className="flex mt-2 justify-between"><span className="text-sm italic font-medium">Aman</span><span className="text-sm">4 min ago</span></div>
    </div>
  )
}

export default Blog