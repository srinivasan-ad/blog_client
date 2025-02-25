"use client";
import { useEffect, useState } from "react";

function useFullBlog(id: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    if (!id)
      {
        
        setLoading(false);
        return; 
      } 
  
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog/${id}`,
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );
  
        const data = await response.json();
        setBlog(data.blog || {});
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog({});
      } finally {
        setLoading(false);
      }
    }
  
    fetchBlogs();
  }, [id]);

  return {
    loading,
    blog,
  };
}

export default useFullBlog;
