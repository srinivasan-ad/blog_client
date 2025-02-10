import Link from "next/link";
import { Avatar } from "./BlogCard";

function Bar() {
  return (
    <div className="border-b flex md:justify-between items-center font-extrabold md:px-10 py-4">
      <div>
        <Link href="/blogs" className="md:block hidden"> Verbser's Blog </Link>
      </div>
      <div className="flex  items-center px-10 py-4 gap-x-10">
        <Link href="/blogs">
     
          <h1>All Blogs</h1>
        </Link>
        <Link href="/userblogs">
         
          <h1>My Blogs</h1>
        </Link>
        <Link href="/createblog">
       
          <h1>Create Blog</h1>
        </Link>
        <Link href="/">

          <h1>Signout</h1>
        </Link>
        <div className="md:block hidden">


        <Avatar name="Aditya" size="big"  />
        </div>
      </div>
    </div>
  );
}

export default Bar;
