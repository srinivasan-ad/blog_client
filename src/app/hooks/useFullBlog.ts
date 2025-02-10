'use client'
import React, { useEffect, useState } from 'react';

function useFullBlog(id : string) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<any>({});

  useEffect(() => {
    async function fetchBlogs(id : string | null){
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog/${id}`, {
          method: "GET",
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setBlog(data.blog || {});
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlog([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs(id);
  }, []);


  return {
 
      loading, 
      blog
 
  };
}

export default useFullBlog;