"use client";
import { useParams } from "next/navigation";
import Bar from "./Bar";
import BlogCard, { Avatar } from "./BlogCard";
import Link from "next/link";
import useFullBlog from "../hooks/useFullBlog";

function FullBlog() {
  const params = useParams();
  const id = params?.id as string;
  const { loading, blog } = useFullBlog(id);
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <Bar />
      <div className="flex w-full pt-10 px-6 bg-white">
        <div className="w-[70%]">
          <div className="w-[80%] space-y-8 mx-auto pl-2">
            <h1 className="text-5xl font-black text-gray-900 break-words">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-500">
              Posted on{" "}
              <span className="font-medium">
                {new Date(blog.created_at).toDateString()}
              </span>
            </p>
            <article className="prose max-w-full text-gray-800 text-xl leading-relaxed break-words">
              <p>{blog.content}</p>
            </article>
          </div>
        </div>
        <aside className="w-[30%] pl-8 border-l border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Author</h2>
          <div className="flex items-center gap-4">
            <Avatar name={blog.author_name} size="big" />
            <div className="flex flex-col items-center gap-4"> 
              <div>
              <p className="text-xl font-extrabold break-words">
            {blog.author_name}
            </p>
            <p className=" text-base text-gray-400">Your daily dose of inspiration</p>
              </div>
           
          
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default FullBlog;
