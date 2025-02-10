'use client'
import React, { useEffect, useState } from 'react';

function useFullBlogs(page : number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlogs(page : number){
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog?page=${page}`, {
          method: "GET",
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs(page);
  }, []);


  return {
 
      loading, 
      blogs
 
  };
}

export default useFullBlogs;