"use client";
import { useState } from "react";
import useBlogs from "../hooks/useBlog";
import Bar from "./Bar";
import BlogCard from "./BlogCard";

function Blog() {
  const [page, setPage] = useState(1);

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
    return <div>Loading blogs...</div>;
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
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-5 mt-6">
        {page > 1 && (
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-md"
          >
            Prev
          </button>
        )}
        {blogs.length === 4 && (
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Blog;
