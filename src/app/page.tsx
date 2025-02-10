"use client";
import Link from 'next/link';
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
   const router = useRouter();
  
    // useEffect(() => {
    //   const validateUser = async () => {
    //     try {
    //       const response = await fetch("https://blogserver-production-e457.up.railway.app/user/validate", {
    //         method: "GET",
    //         credentials: "include",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       if (response.status === 200) {
    //         toast.success("Session validated! Redirecting...");
    //         router.push("/blogs");
    //       }
    //       else{
    //         toast.info("Session expired ... Please login :)" , {
    //           style: { backgroundColor: "#3b82f6", color: "blue" },
    //         });
    //         router.push("/signin");
    //       }
    //     } catch (error) {
    //       console.error("Validation failed:", error);
    //     }
    //   };
    //   validateUser();
    // }, []);
  return (
    <>
      <Link href= "/signup">Signup</Link>
      <Link href= "/signin">Signin</Link>
      <Link href= "/blog/:id">Signup</Link>
      <Link href= "/blogs">Signup</Link>
    </>
  );
}
