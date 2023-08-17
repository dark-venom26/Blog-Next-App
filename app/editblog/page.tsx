import React, { useState } from 'react'
import DateFormatter from '../components/dateformatter';
import moment from 'moment';
import slugify from 'slugify';
import { db, updateDoc, doc, getDoc } from "@/app/lib/db"
import { useRouter } from 'next/navigation'

type Props = {
  blog: any;
}

const EditBlog = ({ blog }: Props) => {
  const router = useRouter()

  const [intro, setIntro] = useState(blog.intro)
  const [title, setTitle] = useState(blog.title)
  const [content, setContent] = useState(blog.content)
  const [createdAt, setCreatedAt] = useState(blog.createdAt)

  const saveBlog = async() => {
    const data = {
      intro,
      title,
      content,
      slug: slugify(title, {lower: true}),
      createdAt: moment().unix(),
      userId: blog.userId
    }

    try {
      const blogRef = doc(db, 'blogs', blog.id);
      const blogDoc = await getDoc(blogRef);
  
      if (blogDoc.exists()) {
        const mergedData = { ...blogDoc.data(), ...data };
        await updateDoc(blogRef, mergedData);

        router.push(`/blog/${data.slug}`)
      } else {
        console.log('Blog not found.');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  }

  return (
    <div className="my-5 w-4/5 m-auto text-center">
      <h2 className="font-medium text-2xl">Edit your blog</h2>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-3 w-[400px]">
            <div className="text-gray-600 text-left">Introduction</div>
            <input value={intro} onChange={(e) => setIntro(e.target.value)} type="text" className="rounded-md outline-none w-full h-7 p-5 shadow-md bg-zinc-100" placeholder="Enter your introduction..." />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="text-gray-600 text-left">Title</div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="rounded-md outline-none w-full h-7 p-5 shadow-md bg-zinc-100" placeholder="Enter your title..." />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="text-gray-600 text-left">Content</div>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="rounded-md outline-none w-full h-32 p-5 shadow-md bg-zinc-100 resize-none" placeholder="Enter your content..." />
          </div>
          <div className="flex text-left text-sm">
            Last Edited: <DateFormatter timestamp={createdAt} />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <button onClick={()=> saveBlog()} className="hover:bg-green-300 hover:text-green-950 p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold">Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditBlog