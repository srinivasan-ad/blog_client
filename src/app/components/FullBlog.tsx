'use client'
import { useParams } from 'next/navigation';
import Bar from "./Bar"
import BlogCard from "./BlogCard"
import Link from "next/link"
import useFullBlog from "../hooks/useFullBlog"


function FullBlog() {
    const params = useParams();
  const id = params?.id as string;
    const {loading,blog} = useFullBlog(id)
    if(loading)
    {
        return(
        <div>
            ...loading
        </div>
        )
    }
  return (
    <div>
<Bar/>

    <div className="flex justify-center pt-4">
        <div className=" space-y-10">
          <BlogCard
          key={blog.id}
          id = {blog.id}
          authorName={blog.author_name}
          title={blog.title}
          content={blog.content}
          publishedDate={blog.created_at}
          />

        </div>
    </div>

    </div>
  )
}

export default FullBlog