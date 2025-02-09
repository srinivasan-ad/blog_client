'use client'
import React, { useEffect, useState } from 'react';

function useBlogs() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlogs(){
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog`, {
          method: "GET",
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return {
 
      loading, 
      blogs
 
  };
}

export default useBlogs;