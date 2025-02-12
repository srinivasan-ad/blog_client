"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bar from "./Bar";
import useFullBlog from "../hooks/useFullBlog";

function BlogEditor() {
  const params = useParams()
 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const id = params?.id as string
  const { loading, blog } = useFullBlog(id);
 
useEffect(() => {
  if(id && blog)
    {
      setTitle(blog.title || " ")
      setContent(blog.content || " ")
    }
},[id,blog])
if (loading) {
  return <div className="ben"></div>;
}
const userId = localStorage.getItem("userId")
if (!userId) {
  toast.error("User not logged in.");
  return;
}
  const handleSubmit = async () => {
    const payload = {
      title,
      content,
      published: true,
      userId: userId ? parseInt(userId) : 0,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Blog posted successfully!", {
          onClose: () => {
            router.push(`/blog/${data.id}`);
          },
        });
        setTitle("");
        setContent("");
      } else {
        toast.error(data.message || "Failed to post blog.");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  async function handleDraft(){
    const payload = {
      title,
      content,
      published: false,
      userId: localStorage.getItem("userId"),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Draft saved successfully!", {
          style: { backgroundColor: "rgb(249, 250, 251)", color: "blue" },
          onClose: () => {
            router.push(`/userdrafts`);
          },
        });
        setTitle("");
        setContent("");
      } else {
        toast.error(data.message || "Failed to save draft.");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("An unexpected error occurred.");
    }
  };
 async function handleDraftSubmit (){
    const payload = {
      title,
      content,
      published: true,
      blogId : parseInt(id),
      userId: localStorage.getItem("userId"),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Draft published successfully!", {
          style: { backgroundColor: "#c6f6d5", color: "green" },
          onClose: () => {
            router.push(`/blog/${id}`);
          },
        });
        setTitle("");
        setContent("");
      } else {
        toast.error(data.message || "Failed to save draft.");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("An unexpected error occurred.");
    }
  };
  async function handleDraftSaveDraft (){
    const payload = {
      title,
      content,
      published: false,
      blogId : id,
      userId: localStorage.getItem("userId"),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/blog`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Draft saved successfully!", {
          style: { backgroundColor: "rgb(249, 250, 251)", color: "blue" },
          onClose: () => {
            router.push(`/userdrafts`);
          },
        });
        setTitle("");
        setContent("");
      } else {
        toast.error(data.message || "Failed to save draft.");
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("An unexpected error occurred.");
    }
  };
const head = !id ? "Create a New Blog" : "Edit Draft "
  return (
    <div>
      <Bar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          aria-label="Toast Notifications"
        />
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-extrabold text-center mb-6 ">
          {head}
          </h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Blog Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Blog Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your amazing content here..."
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 h-40 resize-none"
              />
            </div>
            <div className="flex w-full justify-around">
            <button
              onClick={id ? handleDraftSaveDraft : handleDraft}
              className="w-[30%] py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Save Draft
            </button>
            <button
              onClick={id ? handleDraftSubmit : handleSubmit}
              className="w-[30%] py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-200"
            >
              Publish
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogEditor;
