"use client";
import { useState } from "react";
import useBlogs from "../hooks/useBlog";
import Bar from "./Bar";
import BlogCard from "./BlogCard";

function Blog() {
  const [page, setPage] = useState<number>(1);

  const { loading, blogs } = useBlogs(page);

  const handleNext = () => {
    if (blogs.length === 4) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (loading) {
    return (
      <div
        role="status"
        className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-12 animate-pulse"
      >
        <div className="max-w-4xl w-full space-y-8 px-4">
          <div className="h-8 bg-gray-300 rounded-md w-1/2 mb-4"></div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="h-5 bg-gray-200 rounded-md w-full"></div>
              <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
              <div className="h-5 bg-gray-200 rounded-md w-1/2"></div>
              <div className="flex justify-between pt-4">
                <div className="h-8 bg-gray-300 rounded-md w-20"></div>
                <div className="h-8 bg-gray-300 rounded-md w-28"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-x-4 mt-8">
          <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-24 bg-gray-300 rounded-md"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Bar />

      <div className="flex justify-center pt-4">
        <div className="space-y-10">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author_name}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.created_at}
              type = "blog"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-5 mt-10">
        {page > 1 && (
         <button
         onClick={handlePrev}
          className={`p-3 rahul`}>
    
         Prev
       </button>
        )}
        {blogs.length === 4 && (
          <button onClick={handleNext}    className="py-3 px-7 bg-gradient-to-r from-green-300 to-blue-300 text-slate-800 rounded-3xl shadow-md hover:shadow-lg hover:from-green-400 hover:to-blue-400 transition-transform transform hover:scale-105">
        Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Blog;
