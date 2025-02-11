"use client";
import { useEffect, useState } from "react";

function useUserDrafts(userId: string, page: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    if (!userId) return;

    async function fetchUserBlogs() {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user/${userId}/drafts?page=${page}`,
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
        console.log("Fetched user blogs:", data);
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUserBlogs();
  }, [userId, page]);

  return {
    loading,
    blogs,
  };
}

export default useUserDrafts;
