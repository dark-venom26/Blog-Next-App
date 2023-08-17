'use client'
import { useEffect, useState } from "react";
import { db, collection, getDocs, query, where } from "@/app/lib/db"
import DateFormatter from "@/app/components/dateformatter";
import Loader from "@/app/components/loader";
import EditBlog from "@/app/editblog/page";

type Props = {
  params: any;
}


const Page = ({ params }: Props) => {

  const [blog, setBlog] = useState<any>();
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        const blogsRef = collection(db, 'blogs');
        const q = query(blogsRef, where('slug', '==', params.slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const blogDoc = querySnapshot.docs[0];
          const blogData = blogDoc.data();
          setBlog({...blogData, id: blogDoc.id});
        } else {
          console.log('No blog found with the given slug.');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlogBySlug();
  }, []);

  return (
    <div className="flex flex-col mt-6 w-3/4 m-auto relative">
      {
        editMode ? 
          <EditBlog blog={blog}/>
        :
          blog ? <div className="flex flex-col justify-center">
            <div className="text-xl font-semibold">{blog.intro}</div>
            <div className="text-lg font-medium mt-4">{blog.title}</div>
            <div className="text-md font-normal mt-3">
              {blog.content}
            </div>
            <div className="text-sm mt-5"><DateFormatter timestamp={blog.createdAt} /></div>
          </div> : <Loader/>
      }
      <button onClick={()=>setEditMode(!editMode)} className="absolute bottom-0 right-0 rounded-md border-sky-950 hover:bg-sky-950 hover:text-white shadow border-2 w-24 p-1 mt-3 cursor-pointer">{editMode ? "Cancel" : "Edit"}</button>
    </div>
  )
}

export default Page