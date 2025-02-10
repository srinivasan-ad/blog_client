"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserBlogs from "../hooks/userblog";

function UserBlog() {
  const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  const { loading, blogs } = useUserBlogs(userId ?? "", page);

  const handleNext = () => {
    if (blogs.length === 5) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    if (!loading && blogs.length === 0) {
      toast.info("Create blogs to view them", {
        style: { backgroundColor: "#3b82f6", color: "white" },
      });
    }
  }, [blogs, loading]);

  if (loading) {
    return (
      <div role="status" className="h-screen bg-gray-50 flex flex-col items-center justify-start pt-12 animate-pulse">
        <div className="max-w-4xl w-full space-y-8 px-4">
          <div className="h-8 bg-gray-300 rounded-md w-1/2 mb-4"></div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md space-y-4">
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
    <div className="flex justify-center pt-4">
      {blogs.length > 0 ? (
        <>
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

          <div className="flex justify-center items-center gap-x-5 mt-2">
            {page > 1 && (
              <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-md">
                Prev
              </button>
            )}
            {blogs.length === 5 && (
              <button onClick={handleNext} className="p-2 bg-gray-200 rounded-md">
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center font-bold text-lg mt-4">
          Create blogs to view them here
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default UserBlog;
