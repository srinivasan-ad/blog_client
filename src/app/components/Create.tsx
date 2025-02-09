"use client";

import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm , FieldErrors} from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signupSchema = z.object({
  name: z.string().nonempty("Name is required"),
  username: z.string().nonempty("Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const loginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SigninData = z.infer<typeof signupSchema>;
type LoginData = z.infer<typeof loginSchema>;

export default function Login({ type }: { type: "signup" | "signin" }) {
  const schema = type === "signin" ? loginSchema : signupSchema;

  const { register, handleSubmit, formState: { errors } } = useForm<SigninData | LoginData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SigninData | LoginData) => {
    try {
      const endpoint = type === "signup" ? "/user/signup" : "/user/signin";
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        toast.success(`${type === "signup" ? "Sign-up" : "Sign-in"} successful!`);
      } else if (response.status === 400) {
        toast.info("Username is already taken :)", {
          style: { backgroundColor: "#3b82f6", color: "blue" },
        });
      }
      else if (response.status === 404) {
        toast.info("Username not found :(", {
          style: { backgroundColor: "#3b82f6", color: "blue" },
        });
      }
      else if (response.status === 405) {
        toast.info("Password is incorrect :(", {
          style: { backgroundColor: "#3b82f6", color: "yellow" },
        });
      } else {
        const errorData = await response.json();
        toast.error(
          `Error: ${errorData.message || "Operation failed :("}`
        );
      }
    } catch (error) {
      toast.error("Network error, please try again.");
    }
  };

  const head = type === "signup" ? "Create an account" : "Login to your account";
  const baseHead = type === "signup"
    ? "Already have an account ? "
    : "Don't have an account ? ";
  const baseLink = type === "signup" ? "Login" : "Signup";
  const link = type === "signup" ? "signin" : "signup";

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} aria-label="Toast Notifications" />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold">{head}</h1>
          <p className="text-sm text-gray-500">
            {baseHead}
            <Link href={`/${link}`} className="underline hover:scale-150">
              {baseLink}
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {type === "signup" && (
  <div>
    <label className="block text-gray-700 font-medium">Name</label>
    <input
      type="text"
      {...register("name")}
      className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
    />
    {(errors as FieldErrors<SigninData>)?.name && (
      <p className="text-red-500 text-sm">
        {(errors as FieldErrors<SigninData>).name?.message}
      </p>
    )}
  </div>
)}

          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              {...register("username")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
