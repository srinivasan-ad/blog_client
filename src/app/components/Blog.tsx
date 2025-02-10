"use client";
import { useState } from "react";
import useBlogs from "../hooks/useBlog";
import Bar from "./Bar";
import BlogCard from "./BlogCard";
import Link from "next/link";

function Blog() {
  const [page, setPage] = useState(1);

  function handleNext() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePrev() {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  }
  const { loading, blogs } = useBlogs(page);
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Bar />

      <div className="flex justify-center pt-4">
        <div className=" space-y-10">
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author_name}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.created_at}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-5 mt-6">
        <button
          onClick={handlePrev}
          className={`p-2 bg-gray-200 rounded-md ${
            page === 1 ? "hidden" : "block"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className={`p-2 bg-gray-200 rounded-md ${
            blogs.length === 4 ? "block" : "hidden"
          } `}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blog;
