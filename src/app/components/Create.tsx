"use client";

import { useState } from "react";
import { z } from "zod";
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginSchema = z.object({
  name: z.string().nonempty("Name is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login({type} : {type : "signup" | "signin"}) {
  const [formData, setFormData] = useState<LoginData | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    setFormData(data); 
    try {
      const response = await fetch("https://blogserver-production-e457.up.railway.app/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        toast.success("Sign-up successful!"); 
      }
      else if (response.status === 400) {
        toast.info("Username is already taken :)", { style: { backgroundColor: "#3b82f6", color: "white" } });
      } 
       else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message || "Something went wrong , user registration failed :("}`);
      }
    } catch (error) {
      toast.error("Network error, please try again.");
    }
  };
  return (
    <div className=" bg-gray-50 h-screen flex items-center justify-center">
      <ToastContainer
       position="top-center"
       autoClose={3000}
       aria-label="Toast Notifications"
        />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">Create an account</h1>
          <p className="text-sm text-gray-500">Already have an account ? <Link href="/signin" className="underline hover:scale-150">Login</Link></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              {...register("username")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            Login
          </button>
        </form>
        {formData && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
            <p>Stored Data:</p>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
