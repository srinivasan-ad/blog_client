"use client";
import { useEffect, useState } from "react";

function useBlogs(page: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog?page=${page}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched blogs:", data);
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [page]);

  return {
    loading,
    blogs,
  };
}

export default useBlogs;
