import React from 'react'
import DateFormatter from '../dateformatter';
import Link from 'next/link';

type Props = {
    intro: string;
    slug: string;
    content: string;
    createdAt: number
}

const Blog = ({intro, content, slug, createdAt}: Props) => {
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col shadow-md w-72 p-4 m-6 hover:bg-amber-100 hover:scale-105 transition-all duration-150 cursor-pointer">
    <div className="text-lg font-semibold">{intro}</div>
    <div className="text-sm">{content.substring(0,160)}...</div>
    <div className="flex mt-2 justify-between">
      <span className="text-sm">
        <DateFormatter timestamp={createdAt}/>
      </span>
    </div>
    </Link>
  )
}

export default Blog