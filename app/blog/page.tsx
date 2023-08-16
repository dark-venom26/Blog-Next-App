
type Props = {}

const Blog = (props: Props) => {
  return (
    <div className="my-5 w-4/5 m-auto text-center">
      <h2 className="font-medium text-2xl">Create your blog</h2>
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-3 w-[400px]">
            <div className="text-gray-600 text-left">Introduction</div>
            <input type="text" className="rounded-md outline-none w-full h-7 p-5 shadow-md bg-zinc-100" placeholder="Enter your introduction..."/>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="text-gray-600 text-left">Title</div>
            <input type="text" className="rounded-md outline-none w-full h-7 p-5 shadow-md bg-zinc-100" placeholder="Enter your title..."/>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="text-gray-600 text-left">Content</div>
            <textarea className="rounded-md outline-none w-full h-32 p-5 shadow-md bg-zinc-100 resize-none" placeholder="Enter your content..."/>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <button className="hover:bg-green-300 hover:text-green-950 p-3 rounded-md outline-none cursor-pointer flex items-center justify-center text-white bg-green-950 transition-all duration-100 font-semibold">Create</button>
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col gap-y-3">
            <li className="text-lg font-semibold list-none">Related Blogs</li>
            <li className="list-disc">First blog</li>
            <li className="list-disc">Second blog</li>
            <li className="list-disc">Third blog</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Blog