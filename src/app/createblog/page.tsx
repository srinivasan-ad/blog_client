'use client';



import dynamic from "next/dynamic";

const BlogEditor = dynamic(() => import("../components/InsertEditor"), {
  ssr: false,
});

export default function Page() {
  return <BlogEditor />;
}