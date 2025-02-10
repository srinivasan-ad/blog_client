"use client";
import Link from 'next/link';

export default function Home() {
  const projectDescription = `This blog project was built as a way to brush up  
  my knowledge of technologies like TypeScript, Next.js,  
  PostgreSQL, Express.js, Node.js, and JWT. It is still  
  a work in progress, created to revisit and refresh my  
  learning. Stay tuned for updates and improvements!`;
  
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


    <div className="h-screen bg-gray-50 flex items-center justify-center flex-col gap-y-16 p-6">
      <h1 className="text-blue-600 font-bold text-5xl text-center cursor-pointer">
        Welcome to My Blog
      </h1>
      <pre className="text-gray-700 text-lg font-medium text-center whitespace-pre-wrap max-w-3xl leading-relaxed">
        {projectDescription}
      </pre>
      <div className="flex gap-4">
      <Link href= "/signup">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
         Sign Up
        </button>
        </Link>
        <Link href= "/signin">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Sign In 
        </button>
        </Link> 
      </div>
    </div>
  

    
    </>
  );
}
