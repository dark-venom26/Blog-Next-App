'use client';
import { useEffect, useState } from "react";
import Blog from "./components/blog"
import { db, collection, getDocs  } from "./lib/db"
import Loader from "./components/loader";

interface Blog {
  id: string;
  intro: string;
  title: string;
  content: string;
  slug: string;
  createdAt: number;
  userId: string;
}

export default function Home() {
  
  const [updateBlogs, setUpdateBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const handleUpdateBlogs = async () => {
      try {
        const blogs = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogs);
        const blogsData: Blog[] = blogsSnapshot.docs.map((doc) => {
          const data = doc.data() as Blog;
          return {
            ...data,
            id: doc.id
          };
        });
        setUpdateBlogs(blogsData); 

      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    handleUpdateBlogs();

  }, []);

  return (
   <section className="flex flex-wrap justify-center">
    {
      updateBlogs.length === 0 ? <Loader/> : updateBlogs.map((item)=>(
        <Blog key={item.id} intro={item.intro} slug={item.slug} content={item.content} createdAt={item.createdAt} />

      ))
    }
   </section>
  )
}
